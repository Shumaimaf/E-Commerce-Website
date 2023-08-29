import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { AppRoute } from '../../../App';

function OrderDetails() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios
            .get(`${AppRoute}api/getallorders`)
            .then((response) => {
                console.log(response.data);
                setOrders(response.data.orders);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            {orders.map((order, orderIndex) => (
                <div key={orderIndex}>
                    {order.items.map((item, itemIndex) => (
                        <Row key={itemIndex}>
                            <Col>
                                <ul>
                                    <li>
                                        Title: {item.items}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default OrderDetails;
