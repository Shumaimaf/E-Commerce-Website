import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import AddCategory from './AddCategory'
import { AppRoute } from '../../../App';

export default function AdminCategory() {
    const [category, setCategory] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedCategory, setUpdatedCategory] = useState([])

    const openUpdateModal = (category) => {
        setUpdatedCategory(category);
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
            .put(`${AppRoute}api/update-category/${_id}`, { _id, ...newData })
            .then((response) => {
                const updatedCategory = response.data.category;
                setCategory(updatedCategory);
                closeModal();
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        axios.get(`${AppRoute}api/getallcategories`)
            .then(response => {
                setCategory(response.data.category);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteCategory = (categoryID) => {
        axios.delete(`${AppRoute}api/delete-category/${categoryID}`)
            .then(() => {
                // Fetch updated brands list after successful deletion
                axios.get(`${AppRoute}api/getallcategories`)
                    .then(response => {
                        setCategory(response.data.category);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const recallData = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <>
            <div >
                <h3 className='d-flex justify-content-center mb-3 my-4 bg-primary p-3 text-white'>Categories
                    <AddCategory recallData={recallData} />
                </h3>
            </div>
            <div>
                <Table striped bordered hover size>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Image</th>
                            <th>Delete/Update Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((val, key) =>
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val._id}</td>
                                    <td>{val.CategoryName}</td>
                                    <td className='col-md-2  '><img style={{ width: "20vh" }} className='img-fluid' src={val.CategoryImage} /></td>
                                    <td className='btn text-white bg-dark mx-3' onClick={() => deleteCategory(val._id)}>Delete Category</td>
                                    <td className='btn text-white bg-dark'
                                        onClick={() => {
                                            const newCategoryName = prompt('Enter new Category Name:', val.CategoryName);
                                            const newCategoryImage = prompt('Enter new Category Image URL:', val.CategoryImage);
                                            if (newCategoryName && newCategoryImage) {
                                                handleUpdate(val._id, {
                                                    CategoryName: newCategoryName,
                                                    CategoryImage: newCategoryImage,
                                                });
                                                
                                            }
                                        }}>

                                        Update Category

                                    </td>

                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
