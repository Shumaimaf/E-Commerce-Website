import React, { useEffect, useState, useContext} from 'react';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../components/imageSection';
import { CartContext } from '../CartContext/context'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1)


  const [review, setReview] = useState('');
  const [ratingstar, setRatingstar] = useState(0);
  const [show, setShow] = useState(false); // Cart visibility state

  const { cart_state, cart_dispatch } = useContext(CartContext)


  const ratingChanged = (newRating) => {
    setRatingstar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingstar
    };

    console.log('Review:', review);
    console.log('Rating:', ratingstar);

    Swal.fire({
      title: 'Submitted',
      text: 'Continue Shopping!',
      confirmButtonText: 'Go'
    });
    setReview('');
    setRatingstar(0);
  };

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`)
      .then((json) => setProduct(json.data));
  }, []);


  const addtocart = () => {
    const payload = { ...product, quantity }

    cart_dispatch({
        type: "ADD_TO_CART",
        payload
    });

    Swal.fire({
        icon: 'success',
        title: 'Added to Cart',
        text: 'The product has been added to your cart.',
    });
}

  return (
    <div className="container">
      <div className="text-center my-5">
        <h1 style={{ fontFamily: "Fira Sans',sans-serif" }}>{product.title} - {product.price}$</h1>
        <p className="text-secondary" style={{ fontFamily: "Fira Sans',sans-serif" }}>{product.description}</p>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
      </div>

      <div className="my-3 d-flex justify-content-center align-items-center">

        <div className='d-flex justify-content-around align-items-center bg-light py-4 rounded border-secondary'>
          <button className="btn btn-dark mx-3" disabled={quantity <= 1 ? true : false} onClick={() => setQuantity(quantity - 1)}>-</button>
          {quantity}
          <button className="btn btn-dark mx-3" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className="btn btn-dark " style={{ fontFamily: "Fira Sans',sans-serif" }} onClick={() => addtocart(product)}>
          Add to Cart
        </button>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          {product?.images?.length > 0 && <ImageSection images={product.images} />}
        </div>
        <div className="col-md-6">
          <div>
            <div className="mb-5 text-center">
              <h2 style={{ fontFamily: "Fira Sans',sans-serif" }}>Review us</h2>
              <p style={{ fontFamily: "Fira Sans',sans-serif" }} className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, laborum!</p>
            </div>
            <div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <label htmlFor="floatingTextarea" style={{ fontFamily: "Fira Sans',sans-serif" }}>Comments</label>
              </div>
              <div className="mt-3 text-center" style={{ fontFamily: "Fira Sans',sans-serif" }}>
                Rate Us:
                <div className="d-flex align-items-center justify-content-center">
                  <ReactStars
                    count={5}
                    size={24}
                    value={ratingstar}
                    onChange={ratingChanged}
                    color2={'#ffd700'}
                  />
                  <span className="ms-3">
                    ({ratingstar})
                  </span>
                </div>
              </div>
              <div className="text-center">
                <button style={{ fontFamily: "Fira Sans',sans-serif" }} className="my-3 btn btn-dark" onClick={submitReview}>Submit Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}