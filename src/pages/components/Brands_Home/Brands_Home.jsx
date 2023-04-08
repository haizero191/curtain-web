import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Brands_Home.scss";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Brands_Home = () => {
  return (
    <div className='Brands_Home'>
      <div className='container-fluid h-100 '>
        <Carousel
          responsive={responsive}
          swipeable={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2300}
          keyBoardControl={true}
          containerClass="carousel-container"
        >
          <div className='h-100 brand-item'>
            <img src="//cdn.shopify.com/s/files/1/0504/6543/9911/files/De-la-espada_medium.png?v=1666105653" alt="" />
          </div>
          <div className='h-100 brand-item'>
            <img src="//cdn.shopify.com/s/files/1/0504/6543/9911/files/Karakter_medium.png?v=1666105731" alt="" />
          </div>
          <div className='h-100 brand-item'>
            <img src="//cdn.shopify.com/s/files/1/0504/6543/9911/files/SEM-spotti-edizioni-milano_medium.png?v=1666105779" alt="" />
          </div>
          <div className='h-100 brand-item'>
            <img src="//cdn.shopify.com/s/files/1/0504/6543/9911/files/Karakter_medium.png?v=1666105731" alt="" />
          </div>
          <div className='h-100 brand-item'>
            <img src="//cdn.shopify.com/s/files/1/0504/6543/9911/files/Carl-Hansen_medium.png?v=1666105576" alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Brands_Home