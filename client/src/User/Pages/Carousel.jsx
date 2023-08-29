import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" className='mb-5'>
      <Carousel.Item>
        <img
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-ecommerce-templates.png"
          alt="First slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>E Commerce Website</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://marketplace.canva.com/EAEumqQ5W9M/1/0/1600w/canva-aesthetic-new-arrival-fashion-collage-facebook-cover-PzLQ_j20C38.jpg"
          alt="Second slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Shop Clothes</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/free-photo/front-view-perfume-bottle-biege-blurred-background_140725-145528.jpg?w=2000"
          alt="Third slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Fragrances</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-exquisite-handbags-promotion-season-simple-yellow-banner-image_182329.jpg"
          alt="Fourth slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Bags</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-atmospheric-high-end-watch-big-light-texture-black-background-image_163094.jpg"
          alt="Fifth slide"
          className="d-block w-100"
          style={{ objectFit: 'cover', height: '400px' }}
        />
        <Carousel.Caption>
          <h5>Watches</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
