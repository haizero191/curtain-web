import React from 'react'
import "./Categories.scss"
const Categories = () => {
    return (
        <div className='Categories'>
            <div className='container'>
                <div className='title'>
                    <h2>Danh mục kinh doanh</h2>
                </div>
                <div className='content'>
                    <div className='service-list'>
                        <div className='row h-100'>
                            <div className='col-md-4 col-sm-12'>
                                <div className='service-item'>
                                    <div className='desc'>
                                        <h3>Lorem Ipsum</h3>
                                    </div>
                                    <img src="https://www.chelseacleaning.co.za/wp-content/uploads/2014/09/curtain-cleaner.jpg" alt="" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <div className="service-item">
                                    <div className='desc'>
                                        <h3>Lorem Ipsum</h3>
                                    </div>
                                    <img src="https://d2zj34g1oasqzb.cloudfront.net/data/media/images/blogimages//Preston-Slate-Web.jpg" alt="" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <div className='service-item'>
                                    <div className='desc'>
                                        <h3>Lorem Ipsum</h3>
                                    </div>
                                    <img src="https://d2zj34g1oasqzb.cloudfront.net/Data/Media/Images/Catalogue/Cove_Sand_19_1.jpg?height=auto&width=600&404=default.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories