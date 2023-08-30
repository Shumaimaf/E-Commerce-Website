<h1 align="center" id="title"> EASY SHOPPING ⚛️ </h1>

<p id="description">Easy Shopping, our pioneering MERN Stack E-commerce platform, transforms Point-of-Sale systems. Seamlessly harnessing the capabilities of MongoDB, Express.js, React, and Node.js, it offers an intuitive shopping journey. Users can effortlessly explore and place orders, while the underlying technology guarantees efficient data management, seamless communication, and dynamic interfaces. This ushers in a new era of elevated customer experiences, optimizing operations for modern enterprises..</p>

<h2> Live Link🔗 </h2>

[https://gleaming-pocketbook-hare.cyclic.cloud/](https://gleaming-pocketbook-hare.cyclic.cloud/)](https://creepy-rose-sweatpants.cyclic.app/)


<h1>API Endpoints</h1>

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


<h1 align="center">Hi 👋, I'm Shumaima Fatima</h1>
<h3 align="center">A passionate frontend developer from PAKISTAN</h3>

- 👨‍💻 All of my projects are available at [https://github.com/Shumaimaf?tab=repositories](https://github.com/Shumaimaf?tab=repositories)

- 📫 How to reach me **shumaimaf@gmail.com**

<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

