import React from 'react'
import "./ProductReview_Home.scss";
import Carousel from 'react-bootstrap/Carousel';

const ProductReview_Home = ({product}) => {
    return (
        <div className='ProductReview_Home'>
            <div className='image'>
                <Carousel touch="true" interval={null} controls={false}>
                    <Carousel.Item>
                    <img src="https://www.ikea.com/sg/en/images/products/hilleborg-block-out-curtains-1-pair-grey__0632151_pe695309_s5.jpg?f=s" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="https://www.ikea.com/sg/en/images/products/hilleborg-block-out-curtains-1-pair-grey__0889137_pe695310_s5.jpg?f=xl" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="https://www.ikea.com/sg/en/images/products/hilleborg-block-out-curtains-1-pair-grey__0889137_pe695310_s5.jpg?f=xl" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='info'>
                <div className='name'>Rèm văn phòng</div>
                <div className='short-desc'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='btn-detail'>
                    Chi tiết sản phẩm
                </div>
                <div className='btn-contact'>
                    Liên hệ ngay
                </div>
            </div>
        </div>
    )
}

export default ProductReview_Home