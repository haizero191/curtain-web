import React from 'react'
import "./Products_Home.scss"
import Carousel from 'react-multi-carousel';
import ProductReview_Home from '../ProductReview_Home/ProductReview_Home';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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

const Products_Home = () => {
    return (
        <div className='Products_Home'>
            <div className='title'>
                <h3>Sản phẩm của của chúng tôi</h3>
            </div>
            <div className='container h-100'>
                <div className='content'>
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={4000}
                        keyBoardControl={true}
                        containerClass="carousel-container"
                    >

                        {
                            [0, 0, 0, 0].map((item, index) => {
                                return <div className={`h-100 product-item`}  key={index}>
                                    <ProductReview_Home/>
                                </div>
                            })
                        }
                    </Carousel>
                </div>
                <div className="view-all">Xem tất cả</div>
            </div>
        </div>
    )
}

export default Products_Home