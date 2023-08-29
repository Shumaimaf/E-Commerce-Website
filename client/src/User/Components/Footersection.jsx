import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { DiAtom } from 'react-icons/di';
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai'
import './Footer.css'

export default function Footersection() {
  return (
    // <div className=" bg-body-tertiary text-body-secondary fw-lighter  py-4 mt-5">
    //   <div className="container">
    //     <div className="row" >
    //       <div className="col-md-6">
    //         <h4 className='fs-3' style={{ fontFamily: "Fira Sans',sans-serif", textTransform: "capitalize" }}>About Us</h4>
    //         <p style={{ fontFamily: "Fira Sans',sans-serif" }}>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lacus at velit vestibulum, a iaculis orci sagittis.
    //         </p>
    //       </div>
    //       <div className="col-md-3">
    //         <h4 className='fs-3' style={{ fontFamily: "Fira Sans',sans-serif", textTransform: "capitalize" }}>Contact</h4>
    //         <p>
    //           123 Street,
    //           <br />
    //           City, Country
    //           <br />
    //           <a href="mailto:info@example.com">Shumaimaf@gmail.com</a>
    //         </p>
    //       </div>
    //       <div className="col-md-3">
    //         <h4 className='fs-3' style={{ fontFamily: "Fira Sans',sans-serif", textTransform: "capitalize" }}>Follow Us</h4>
    //         <div className="social-icons">
    //           <Row>
    //             <Col><BsFacebook /></Col>
    //             <Col>twitter</Col>
    //             <Col><AiOutlineInstagram /></Col>
    //           </Row>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="text-center mt-4">
    //     <p className="mb-0">© {new Date().getFullYear()} Your Company. All Rights Reserved</p>
    //   </div>
    // </div>

    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-3 pb-2">
          <div className="row">
            <Row className="cta-text">
              <Col><h4><i className="fa-solid fa-location-dot text-danger" /> Find us</h4>
                <span>123 Street,
                  Karachi, Pakistan</span></Col>
              <Col> <h4><i className="fas fa-phone text-danger" /> Call us</h4>
                <span>0345-0345769</span></Col>
              <Col> <h4><i className="far fa-envelope-open text-danger" /> Mail us</h4>
                <span>shumaimaf@gmail.com</span></Col>
            </Row>
          </div>
        </div>
        <div className="footer-content pt-3 pb-3">
          <div className="row">
            <Row className="text-white">
              <Col><h2>EASY SHOPPING <DiAtom className='text-danger' /></h2></Col>
              <Col>FOLLOW US</Col>
            </Row>
            <Row>
              <Col className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>
              </Col>
              <Col >
                <p className='mb-0 pb-0 text-white'>
                <i className="fa-brands fa-facebook facebook-bg text-white"/> Shumaima Khan
                </p>
                <p className='mb-0 pb-0 text-white'>
                  <i className="fa-brands fa-linkedin twitter-bg text-white" /> https://www.linkedin.com/in/shumaima-fatima-4aa468267/
                </p>
                <p className='mb-0 pb-0 text-white'>
                <i className="fa-brands fa-github google-bg text-white"/> https://github.com/Shumaimaf
                </p>
              </Col>
            </Row>




          </div>
        </div>
      </div>
      <div className="copyright-text text-center pt-0">
        <p>
          All Right Reserved ©
        </p>
      </div>
    </footer>

  );
}
