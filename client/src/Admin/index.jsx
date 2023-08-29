import React from 'react'
import AdminNav from './components/AdminNav'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminHome from './pages/AdminHome'
import Category from './pages/Category/Category'
import Brands from './pages/Brands/Brands'
import Products from './pages/Products/Products'
import Orders from './pages/orders/orders'

export default function App() {
    return (
        <>
            <AdminNav />
            <div>
                <Routes>
                    <Route path='/login' element={< Navigate to='/admin/home'  replace={true} />}  />
                    <Route path='/admin/home' element={<AdminHome />} />
                    <Route path='/admin/orders' element={<Orders />} />
                    <Route path='/admin/category' element={<Category />} />
                    <Route path='/admin/brands' element={<Brands />} />
                    <Route path='/admin/products' element={<Products />} />
                </Routes>

            </div>
        </>
    )
}
