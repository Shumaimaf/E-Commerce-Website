import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { AppRoute } from "../../../App";

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState({}); // State to hold items as an object for quick access

    useEffect(() => {
        axios.get(`${AppRoute}api/getallorders`)
            .then(response => {
                setOrders(response.data.orders);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteOrder = (orderID) => {
        axios.delete(`${AppRoute}api/delete-order/${orderID}`)
            .then(() => {
                // Fetch updated orders list after successful deletion
                axios.get(`${AppRoute}api/getallorders`)
                    .then(response => {
                        setOrders(response.data.orders); // Correct this line to setOrders(response.data.orders)
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            {orders.length > 0 ? (
                orders.map((val, key) => (
                    <Card body key={key}>
                        <ul className="bg-white fw-semibold">
                            <li>ORDER : {key + 1}</li>
                            <li>ID : {val._id}</li>
                            <li>Customer Name : {val.customerName}</li>
                            <li>Customer Email : {val.customerEmail}</li>
                            <li>Customer Contact : {val.customerContact}</li>
                            <li>Customer Address : {val.customerAddress}</li>
                            {/* <li><OrderDetails /></li> */}
                            <li>Total Bill : ${val.totalBill}</li>
                            <li>Order Time : {val.orderTime}</li>

                        </ul>
                        <p className='btn btn-dark ' onClick={() => deleteOrder(val._id)}>Delete order</p>
                    </Card>
                ))
            ) : (
                <p>No orders available.</p>
            )}
        </>
    );
}