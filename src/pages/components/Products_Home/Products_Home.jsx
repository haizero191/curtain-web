import React from 'react'
import "./Products_Home.scss"


const Products_Home = () => {
    return (
        <div className='Products_Home'>
            <div className='title'>
                <h3>Sản phẩm của của chúng tôi</h3>
            </div>
            <div className='container'>
                <div className='content'>
                    <div className='product-list'>
                        <div className='row'>
                            <div className='col-md-4 product-item'>product 1</div>
                            <div className='col-md-4 product-item'>product 2</div>
                            <div className='col-md-4 product-item'>product 3</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products_Home