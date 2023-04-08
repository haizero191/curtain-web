import React from 'react'
import "./Categories_Home.scss"
const Categories_Home = () => {
    return (
        <div className='Categories'>
            <div className='wrapper'>
                <div className='title'>
                    <h3>Dịch vụ của chúng tôi</h3>
                </div>
                <div className='content'>
                    <div className='service-list'>
                        <div className='row h-100 w-100 m-0'>
                            <div className='col-md-4 col-sm-12 p-0'>
                                <div className='service-item'>
                                    <div className='desc'>
                                        <h3>Bảo dưỡng</h3>
                                        <p>Vệ sinh, bảo dưỡng các sản phẩm của người dùng. Chúng tôi luôn đặt trải nghiệm của người tiêu dùng lên hàng đầu</p>
                                        <div className='btn'>Xem Thêm</div>
                                    </div>
                                    <img src="https://www.chelseacleaning.co.za/wp-content/uploads/2014/09/curtain-cleaner.jpg" alt="" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 p-0'>
                                <div className="service-item">
                                    <div className='desc'>
                                        <h3>Thiết kế</h3>
                                        <p>Chú trọng các không gian thẩm mĩ, nâng tầm thiết kế cho căn phòng của bạn</p>
                                        <div className='btn'>Xem Thêm</div>
                                    </div>
                                    <img src="https://d2zj34g1oasqzb.cloudfront.net/data/media/images/blogimages//Preston-Slate-Web.jpg" alt="" />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12 p-0'>
                                <div className='service-item'>
                                    <div className='desc'>
                                        <h3>Cung cấp</h3>
                                        <p>Các sản phẩm đa dạng về mẫu mã và chất lượng, đưa người tiêu dùng với nhiều sự lựa chọn hơn cho không gian của mình</p>
                                        <div className='btn'>Xem Thêm</div>
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

export default Categories_Home