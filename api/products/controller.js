const Product = require('./model');
const { connect } = require('mongoose')
require('dotenv').config()

// =============Create Product=============//

const createProduct = async (req, res) => {
    const { ProductName, ProductImage } = req.body;
    console.log('ProductName:', ProductName);
    console.log('ProductImage:', ProductImage);

    if (!ProductName || !ProductImage) { // Corrected this line
        console.log('Missing Required Field');
        res.status(400).json({
            message: 'Missing Required Field'
        });
    } else {
        try {
            await connect(process.env.MONGO_URL);
            console.log('DB Connected');
            await Product.create({ ProductName, ProductImage });

            const allProduct = await Product.find();;
            res.json({
                message: 'Added Successfully',
                product: allProduct
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
};


//============ Get Product by Brand============//

const getProductByBrand = async (req, res) => {
    const { brand } = req.body;
    try {
        await connect(process.env.MONGO_URL);

        const products = await Product.find({ brand });

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found for the given brand',
            });
        }

        res.json({ products });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


// =============Get Product by Category==========//

const productByCategory = async (req, res) => {
    const { category } = req.body;
    try {
        await connect(process.env.MONGO_URL);

        const products = await Product.find({ category });

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found for the given category',
            });
        } else {
            res.json({ products });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


//============== Update Product==============//

const updateProduct = async (req, res) => {

    const { _id, ProductName, ProductImage } = req.body;
    const filter = { _id };
    const updateData = { ProductName, ProductImage }
    try {
        await connect(process.env.MONGO_URL);

        await Product.findOneAndUpdate(filter, updateData, {
            new: true,
        });

        const products = await Product.find(); // Get all products after updating

        res.json({
            message: "Success",
            products
        });
    }

    catch (error) {
        res.status(400).json({
            message: error.message
        })

    }
}



//  =========== Delete Product========//

const deleteProduct = async (req, res) => {
    const { _id } = req.params;
    try {
        await connect(process.env.MONGO_URL);
        console.log("DB Connected");
        await Product.findOneAndDelete({ _id });
        const allProducts = await Product.find();

        res.status(200).json({
            message: "Product deleted successfully",
            allProducts,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// ============Get All Products===========//
const getAllProducts = async (req, res) => {
    try {
        await connect(process.env.MONGO_URL);
        const products = await Product.find();

        if (products.length === 0) {
            return res.status(404).json({
                message: 'No products found',
            });
        }

        res.json({ products });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};


module.exports = { createProduct, getProductByBrand, productByCategory, updateProduct, deleteProduct, getAllProducts };
