import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/context';
import './Cart.css'
import { Card, Col, Row } from 'react-bootstrap';
import { GlobalContext } from '../../Context/context';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { decodeToken } from 'react-jwt'
import axios from 'axios';
import { AppRoute } from '../../App';


export default function Cart() {
  const { cart_state, cart_dispatch } = useContext(CartContext);
  const { state, dispatch } = useContext(GlobalContext)
  const [show, setShow] = useState(false); // Cart visibility state
  const [product, setproduct] = useState(cart_state.cart);
  const [quantity, setQuantity] = useState(1)
  const user = decodeToken(state.token)
  const [address, setAddress] = useState(user.address || ''); // Assuming you have the user's address stored
  const [contact, setContact] = useState(user.contact || '');
  const [isLoading, setIsLoading] = useState(false)

  const [showModal, setShowModal] = useState(false);

  // const placeOrder = () => {
  //   const payload = {
  //     items: cart_state.cart,
  //     totalBill: totalPrice(),
  //     customerAddress: address,
  //     customerContact: contact,
  //     customerName: user.username,
  //     customerEmail: user.email
  //   };
  //   console.log(payload);
  //   setShowModal(true);
  // };


  const handleClose = async () => {
    setIsLoading(true);

    const payload = {
      items: cart_state.cart,
      totalBill: totalPrice(),
      customerAddress: address,
      customerContact: contact,
      customerName: user.username,
      customerEmail: user.email
    };

    console.log(payload);
    setShowModal(true);

    try {
      const response = await axios.post(`${AppRoute}api/order-mail`, payload);
      console.log(response.data);

    } catch (error) {
      console.log(error.message);
  } finally {
    setIsLoading(false);
    setShowModal(false); // Close the modal after the request is complete
  }

}

const handleShow = () => setShowModal(true);




const increaseQuantity = (key) => {
  const updatedProducts = [...product];
  updatedProducts[key].quantity += 1;
  setproduct(updatedProducts);
};

const decreaseQuantity = (key) => {
  const updatedProducts = [...product];
  if (updatedProducts[key].quantity > 1) {
    updatedProducts[key].quantity -= 1;
    setproduct(updatedProducts);
  }
};


//  ---------------------REMOVE FROM CART ------------------//

const removeFromCart = (productId) => {
  const updatedCart = cart_state.cart.filter(item => item.id !== productId);
  cart_dispatch({
    type: 'REMOVE_FROM_CART',
    productId: productId
  });
};

//------------------CLEAR CART ----------------// 

const handleClearCart = () => {
  cart_dispatch({ type: 'CLEAR_CART' });
};

const calculateSubtotal = () => {
  return cart_state.cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

const totalPrice = () => {
  return cart_state.cart.reduce((total, product) => {
    return total + product.price * product.quantity + 5;
  }, 0);
};


return (
  <>
    <header>
      <h1 className='text-white'>Cart</h1>
    </header>
    <button
          className="ms-4 mt-3  btn btn-outline-dark"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
    <Row className='cart-body'>
      <Col className='mx-3'>
        <div className="col order p-5">
          <h3 className="topborder text-center">
            <span>Your Order</span>
          </h3>
          <Row className="row" style={{ borderBottom: "1px solid #b9b6b6" }}>
            <Col><h4 className="inline  mx-2">Product</h4></Col>
            <Col><h4 className="inline  mx-3">Image</h4></Col>
            <Col><h4 className="inline  mx-4">Quantity</h4></Col>
            <Col><h4 className="inline  mx-5">Total</h4></Col>
          </Row>
          {/* Product items */}
          <section id="cart">
            {cart_state.cart.map((product, key) => (
              <div key={key} className="wrapper">
                <Row className="row" style={{ borderBottom: "1px solid #b9b6b6" }}>
                  <Col>
                    <h5 className='qty fs-4 fw-semibold mx-2'>{product.title}</h5>
                    <p className='mx-2'>{product.description.length > 30 ? product.description.slice(0, 30) + '...' : product.description}</p>

                  </Col>
                  <Col>
                    <img
                      src={product.thumbnail}
                      style={{ objectFit: 'contain', height: '12vh' }}
                      className="mx-4 align-items-center" />
                  </Col>
                  <Col className="text-center pt-4">
                    <p className='container fs-6 btn btn-outline-dark rounded-0'>
                      <button
                        className="btn btn-unstyled mx-2"
                        onClick={() => decreaseQuantity(key)}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        className="btn btn-unstyled mx-2"
                        onClick={() => increaseQuantity(key)}
                      >
                        +
                      </button>
                    </p>
                  </Col>
                  <Col className="qty inline pt-4 text-center fs-4">
                    {product.price * product.quantity}$
                  </Col>
                  <Row>
                    <Col className='mt-0 mx-3 pt-0'>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Delete
                      </button>
                    </Col>
                  </Row>
                </Row>
              </div>
            ))}
          </section>

          <p />
          <Row style={{ borderBottom: "1px solid #b9b6b6" }}>
            <Col className='col-md-6 mx-1'><h5>Subtotal : </h5></Col>
            <Col className='text-center'><h5>
              ${calculateSubtotal()}</h5></Col>
            <Row className=''>
              <Col className='col-md-6 mx-3' ><h5>Shipping Cost :</h5></Col>
              <Col className='text-center'><h5>$5</h5></Col>
            </Row>
          </Row>
          <Row>
            <Col><h5 className='col-md-6 mx-1'>Total :</h5></Col>
            <Col><h5 className='text-center'>${totalPrice()}</h5></Col>
          </Row>
          <Row>
            <Col>
              <a className="btn btn-dark" href="#scrollspyHeading1">
                Checkout
              </a>
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-root-margin="0px 0px -40%"
                data-bs-smooth-scroll="true"
                className="scrollspy-example bg-body-tertiary p-3 rounded-2"
                tabIndex={0}
              >
              </div>
            </Col>
          </Row>
        </div>
      </Col >
    </Row >
    <Row id="scrollspyHeading1" className='billing-body'>
      <Col className='mx-4 mt-4'>
        <h3 className="topborder mt-5">
          <span>Billing Details</span>
        </h3>
        <h2 className='fs-6 fw-semibold mt-3'>Customer Name : {user.username}</h2>
        <h2 className='fs-6 fw-semibold mt-3'>Customer Email : {user.email}</h2>
        <form method="get">
          <div className="col">
            <label htmlFor="address" className='fs-5 fw-semibold mt-3'>Shipping Address : </label>
            <input
              className='area mx-4 text-dark'
              type="text"
              name="address"
              id="address"
              required=""
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <div className="">
              <label htmlFor="tel" className='fs-5 fw-semibold mt-3'>Phone : </label>
              <input
                className='area mx-4 text-dark'
                type="text"
                name="tel"
                id="tel"
                required=""
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
        </form>
        <Button
          className='mt-4'
          variant="primary"
          type="submit"
          onClick={handleShow}>
          Proceed
        </Button>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Summary</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 className='fs-5'>Customer Name : {user.username}</h2>
            <h2 className='fs-5'>Customer Email : {user.email}</h2>
            <h2 className='fs-5'>Customer Address: {address}</h2>
            <h2 className='fs-5'>Phone: {contact}</h2>
            <h2 className='fs-5'>Total: ${totalPrice()}</h2>
          </Modal.Body>
          <Modal.Footer>
            {/* {isLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : ( */}
            <Button variant="primary" onClick={handleClose} disabled={isLoading}>
              Place Order
            </Button>
            {/* )} */}
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
    <>


    </>



  </>


  // <>
  //   <div>
  //     <header id="site-header">

  //       {/* ////// ------------ CLEAR CART BUTTON  */}

  //       <button
  //         style={{ fontFamily: "'Cinzel', serif" }}
  //         className="ms-4 btn btn-outline-dark"
  //         onClick={() => handleClearCart()}
  //       >
  //         Clear Cart
  //       </button>
  //     </header>
  //     <section id="cart">
  //       {
  //         cart_state.cart.map((product, key) => <div key={key} className="cart-item mt-5" style={{ fontFamily: "'Cinzel', serif" }}>
  //           <h5 className="card-title cart-item-title">{product.title}</h5>
  //           <div>
  //             <Card.Img
  //               variant="top"
  //               src={product.thumbnail}
  //               style={{ objectFit: 'cover', height: '20vh' }}
  //               className="card-image" />
  //           </div>

  //           <div className="my-3 d-flex justify-content-center align-items-center">
  //             <button
  //               className="btn btn-dark"
  //               onClick={() => increaseQuantity(key)}
  //             >
  //               +
  //             </button>
  //             {product.quantity}
  //             <button
  //               className="btn btn-dark"
  //               onClick={() => decreaseQuantity(key)}
  //             >
  //               -
  //             </button>
  //           </div>


  //           <div className="quantity">

  //             <span>Quantity : {product.quantity}</span>

  //           </div>
  //           <p className="card-text cart-item-price">
  //             {product.price * product.quantity}$
  //           </p>

  //           <div>
  //             <button
  //               className="btn btn-danger"
  //               onClick={() => removeFromCart(product.id)}
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </div>)

  //       }
  //       <div>
  //         <p>Subtotal: ${calculateSubtotal()}</p>
  //         <p>Total: ${totalPrice()}</p>
  //       </div>



  //     </section>
  //   </div >



  // </>
)
} 