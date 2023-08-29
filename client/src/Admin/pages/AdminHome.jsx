import React from 'react';
import Orders from './orders/orders';

export default function AdminHome() {
    return (
        <>
            <h1 className="mt-3 fs-1 text-primary">Welcome to Admin Dashboard</h1>
            <Orders/>
            
        </>
    );
}
