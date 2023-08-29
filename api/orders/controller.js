const Mailgen = require('mailgen');
const Orders = require('./model');
const { connect } = require("mongoose");
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const demoMail = async (req, res) => {
    const { customerName, customerEmail } = req.body;
    console.log(customerName, customerEmail);

    if (!customerName || !customerEmail) {
        console.log('missing fields');
        res.status(400).json({
            message: "missing fields"
        });
    } else {
        try {
            await connect(process.env.MONGO_URL);
            console.log('connected');


            await Orders.create({ customerName, customerEmail });
            const allOrders = await Orders.find();
            console.log('success');

            res.json({
                message: "success",
                orders: allOrders
            });
        } catch (error) {
            console.error('db error', error);
            res.status(400).json({
                message: "db error"
            });
        }
    }
};

// -----------------ORDER PLACE-------------///

const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const calculateTax = (subtotal) => {
    const taxRate = 0.05;
    return subtotal * taxRate;
};

const calculateTotal = (subtotal, tax) => {
    const shippingCost = 5; // Assuming shipping cost is fixed
    return subtotal + tax + shippingCost;
};

const orderPlace = async (req, res) => {
    const { items, customerName, customerEmail, customerContact, customerAddress } = req.body;

    if (!items || items.length === 0 || !customerName || !customerEmail || !customerContact || !customerAddress) {
        return res.status(400).json({ message: 'Invalid payload' });
    }

    try {
        const subtotal = calculateSubtotal(items); // Calculate subtotal
        const tax = calculateTax(subtotal); // Calculate tax
        const totalBill = calculateTotal(subtotal, tax);

        await connect(process.env.MONGO_URL);
        console.log("DB Connected");

        const order = await Orders.create({
            items,
            totalBill,
            customerName,
            customerEmail,
            customerContact,
            customerAddress
        });
        //EMAIL
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "shumaimaf@gmail.com",
                pass: "ukyycgiksmxiozyn"
            }
        });

        //MAIL GEN SETUP
        var mailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Mailgen ',
                link: process.env.NODEMAILER_EMAIL
            }
        });

        await transporter.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: customerEmail,
            subject: 'Your Order Details',
            text: 'Your order details',
            html: mailGenerator.generate({
                body: {
                    name: customerName,
                    intro: 'Thank you for your order!',
                    table: {
                        data: items.map(item => ({
                            Product: item.title,
                            Price: `${item.price} €`,
                            Quantity: item.quantity,
                            Subtotal: `${item.price * item.quantity} €`,
                            Image: `<img src="${item.thumbnail}" alt="${item.title}" style="max-width:100px"/>`
                        }))
                    },
                    outro: `Your Order will be delivered at ${customerAddress}, please ensure to activate your contact number . Your Total Bill is ${totalBill}€. Your Order ID ${order._id}`
                }
            })
        });
        console.log("Order created:", order);

        return res.status(201).json({
            message: 'Order placed successfully',
            TrackingId: order._id
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while processing the order.' });
    }
};

// -------ALL ORDERS-------////

const allOrders = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL)
        console.log("DB Connected")
        const allOrders = await Orders.find()
        res.json({
            orders: allOrders
        })

    }
    catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

// --------- DELETE ORDER --------

const deleteOrder = async (req, res) => {
    const { _id } = req.params;
    try {
        await connect(process.env.MONGO_URL)
        console.log("DB Connected");
        await Orders.findOneAndDelete({ _id })
        const order = await Orders.find()

        res.status(200).json({
            message: "deleted Successfully",
            order,
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

const getAnOrder = async (req, res) => {
    const { _id } = req.params;
    try {
        await connect(process.env.MONGO_URL);
        console.log("DB Connected");
        await Orders.findById({ _id })
        const order = await Orders.find()


        res.status(200).json({
            order,
        })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


const orderItems = async (req, res) => {
    const { _id } = req.params; // Extract _id from request parameters

    try {
        await connect(process.env.MONGO_URL);
        const order = await Orders.findOne({ _id });
        res.json({ order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { demoMail, orderPlace, allOrders, deleteOrder, getAnOrder, orderItems }
