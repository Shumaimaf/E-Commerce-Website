<h1 align="center" id="title"> EASY SHOPPING ⚛️ </h1>

<p id="description">Efficient POS MERN Stack Project In today's fast-paced business environment having an efficient and robust point-of-sale (POS) system is paramount for enhancing customer experiences optimizing operations and gaining valuable insights into business performance. The Efficient POS MERN Stack Project is a cutting-edge solution designed to empower businesses with a modern and feature-rich POS experience. By leveraging the MongoDB Express.js React and Node.js (MERN) stack this project provides a comprehensive toolset for managing sales inventory and customer interactions.</p>

<h2> Live Link🔗 </h2>

[https://gleaming-pocketbook-hare.cyclic.cloud/](https://gleaming-pocketbook-hare.cyclic.cloud/)


<h2>🧐API Endpoints</h2>

<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

<h2>API Endpoint Reference</h2>

<h3>1 .BRANDS</h3>
<table>
    <tr>
        <th>HTTP Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getallbrands</td>
        <td>Get a list of all brands</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/addbrand</td>
        <td>Add a new brand</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/brandbyid/:_id</td>
        <td>Get brand information by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/brandbyname/:BrandName</td>
        <td>Get brand information by name</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/update-brand/:_id</td>
        <td>Update brand information by ID</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/delete-brand/:_id</td>
        <td>Delete a brand by ID</td>
    </tr>
</table>

</body>


<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

<h2>API Endpoint Reference</h2>

<h3>2 .CATEGORIES</h3>
<table>
    <tr>
        <th>HTTP Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getallcategories</td>
        <td>Get a list of all categories</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/categoriesbyid/:_id</td>
        <td>Get category information by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/categorybyname/:CategoryName</td>
        <td>Get category information by name</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/create-category</td>
        <td>Create a new category</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/update-category/:_id</td>
        <td>Update category information by ID</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/delete-category/:_id</td>
        <td>Delete a category by ID</td>
    </tr>
</table>

</body>


<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

<h2>API Endpoint Reference</h2>

<h3>3 .PRODUCTS</h3>
<table>
    <tr>
        <th>HTTP Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/create-product</td>
        <td>Create a new product</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/get-product-by-brand</td>
        <td>Get products by brand</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/get-product-by-category</td>
        <td>Get products by category</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/update-product/:_id</td>
        <td>Update product information by ID</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/delete-product/:_id</td>
        <td>Delete a product by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getallproducts</td>
        <td>Get a list of all products</td>
    </tr>
</table>

</body>


<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

<h2>API Endpoint Reference</h2>

<h3>4 .USERS</h3>
<table>
    <tr>
        <th>HTTP Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/login</td>
        <td>User login</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/signup</td>
        <td>User sign up</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getallusers</td>
        <td>Get a list of all users</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/userbyemail/:email</td>
        <td>Get user information by email</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/user/:id</td>
        <td>Get user information by ID</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/delete-user/:_id</td>
        <td>Delete a user by ID</td>
    </tr>
    <tr>
        <td>PUT</td>
        <td>/user/:id</td>
        <td>Update user information by ID</td>
    </tr>
</table>

</body>


<head>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
            border: 1px solid #ddd;
        }

        th, td {
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
    </style>
</head>

<body>

<h2>API Endpoint Reference</h2>

<h3>5 .ORDERS</h3>
<table>
    <tr>
        <th>HTTP Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>/create-order</td>
        <td>Create an order and send a demo email</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/order-mail</td>
        <td>Place an order and send an order confirmation email</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getallorders</td>
        <td>Get a list of all orders</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/delete-order/:_id</td>
        <td>Delete an order by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/get-order/:_id</td>
        <td>Get order information by ID</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/getorderitems/:_id</td>
        <td>Get items of an order by ID</td>
    </tr>
</table>

</body>

  
  
<h2> Features</h2>

Here're some of the project's best features:

*   User-Friendly Interface: The project boasts a modern and intuitive user interface built with React and Material UI ensuring a smooth and engaging user experience
*   Real-Time Inventory Management: Businesses can keep track of their inventory in real-time receive low-stock alerts and make informed restocking decisions.
*   Comprehensive Sales Tracking: Generate detailed sales reports and analytics to gain insights into customer behavior and product performance.
*   Customer Profiling: Create and manage customer profiles enabling personalized marketing strategies and improved customer relationships.
*   Secure Authentication: The project implements robust authentication mechanisms to safeguard sensitive business and customer data.

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone the repository.</p>

<p>2. Install dependencies using npm install.</p>

<p>3. Run the frontend and backend servers using npm run start.</p>

  
  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Frontend: React Material UI
*   Backend: Express.js Node.js
*   Database: MongoDB

<h2>💻 Conclusion</h2>

The Efficient POS MERN Stack Project represents a step forward in empowering businesses with a versatile point-of-sale solution. With its foundation in MongoDB, Express.js, React, and Node.js, it offers streamlined operations and elevated customer experiences in today's competitive marketplace. By addressing key business needs, this project aims to help businesses thrive, innovate, and succeed in a rapidly evolving business landscape.
