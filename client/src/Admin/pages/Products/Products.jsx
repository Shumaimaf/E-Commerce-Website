import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import AddProduct from './AddProduct';
import { useState, useEffect } from 'react';
import { AppRoute } from '../../../App';


export default function Products() {
    const [products, setproducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState([])


    const openUpdateModal = (product) => {
        setUpdatedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleUpdate();
    };



    const handleUpdate = (_id, newData) => {
        axios
            .put(`${AppRoute}api/update-product/${_id}`, { _id, ...newData })
            .then((response) => {
                const updateProduct = response.data.products;
                setproducts(updateProduct);
                closeModal();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        axios.get(`${AppRoute}api/getallproducts`)
            .then(json => {
                setproducts(json.data.products);
            })
            .catch(err => console.log(err));
    }, []);


    const deleteProduct = (ProductID) => {
        axios.delete(`${AppRoute}api/delete-product/${ProductID}`)
            .then(() => {
                // Fetch updated brands list after successful deletion
                axios.get(`${AppRoute}api/getallproducts`)
                    .then(response => {
                        setproducts(response.data.products);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const recallData = (newProduct) => {
        setproducts(newProduct); // Change setProduct to setproducts
    };
    


    return (
        <>

            <div>
                <h3 className='d-flex justify-content-center mb-3 my-4 bg-primary p-3 text-white'>Products
                    <AddProduct recallData={recallData} />
                </h3>
            </div>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Delete/Update Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((val, key) =>
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val._id}</td>
                                    <td>{val.ProductName}</td>
                                    <td className='col-md-2   '><img style={{ width: "20vh" }} className='img-fluid' src={val.ProductImage} /></td>
                                    <td className='btn text-white bg-dark mx-3' onClick={() => deleteProduct(val._id)}>Delete Product</td>
                                    <td className='btn text-white bg-dark'
                                        onClick={() => {
                                            const newProductName = prompt('Enter new Product Name:', val.ProductName);
                                            const newProductImage = prompt('Enter new Product Image URL:', val.ProductImage);
                                            if (newProductName && newProductImage) {
                                                handleUpdate(val._id, {
                                                    ProductName: newProductName,
                                                    ProductImage: newProductImage,
                                                });
                                            }
                                        }}>

                                        Update Product

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
