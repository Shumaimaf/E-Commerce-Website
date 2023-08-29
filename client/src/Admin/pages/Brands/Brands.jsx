import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import AddBrands from '../Brands/AddBrands';
import { AppRoute } from '../../../App';


export default function AdminBrands() {
    const [brands, setBrands] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedBrandForm, setUpdatedBrandForm] = useState([])

    const openUpdateModal = (brand) => {
        setUpdatedBrandForm(brand);
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
            .put(`${AppRoute}api/update-brand/${_id}`, { _id, ...newData })
            .then((response) => {
                const updatedBrands = response.data.brands;
                setBrands(updatedBrands);
                closeModal();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        // Fetch brands from the server when the component mounts
        axios.get(`${AppRoute}api/getallbrands`)
            .then(response => {
                setBrands(response.data.brands);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteBrand = (brandID) => {
        axios.delete(`${AppRoute}api/delete-brand/${brandID}`)
            .then(() => {
                // Fetch updated brands list after successful deletion
                axios.get(`${AppRoute}api/getallbrands`)
                    .then(response => {
                        setBrands(response.data.brands);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const recallData = (newBrands) => {
        setBrands(newBrands);
    };


    return (
        <>
           
            <div >
                <h3 className='d-flex justify-content-center mb-3 my-4 bg-primary p-3 text-white'>Brands
                    <AddBrands recallData={recallData} />
                </h3>
            </div>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Brand Name</th>
                            <th>Image</th>
                            <th>Delete/Update Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((val, key) => (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val._id}</td>
                                    <td>{val.BrandName}</td>
                                    <td className='col-md-2 '><img style={{ width: "20vh" }} className='img-fluid' src={val.BrandImage} /></td>
                                    <td className='btn text-white bg-dark mx-3' onClick={() => deleteBrand(val._id)}>Delete Brand</td>
                                    <td className='btn text-white bg-dark'
                                        onClick={() => {
                                            const newBrandName = prompt('Enter new Brand Name:', val.BrandName);
                                            const newBrandImage = prompt('Enter new Brand Image URL:', val.BrandImage);
                                            if (newBrandName && newBrandImage) {
                                                handleUpdate(val._id, {
                                                    BrandName: newBrandName,
                                                    BrandImage: newBrandImage,
                                                });
                                            }
                                        }}>

                                        Update Brand

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div >


        </>
    )
}
