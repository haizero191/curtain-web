import React from 'react'
import Banner from '../components/Banner/Banner';
import BannerAttachment from '../components/BannerAttachment/BannerAttachment';
import Brands_Home from '../components/Brands_Home/Brands_Home';
import Categories_Home from '../components/Categories_Home/Categories_Home';

import "./Home.scss";

const Home = () => {
  return (
    <div className='Home'>
      {/* Section rendered */}
      <div className='Banner-section'>
        <Banner />
      </div>
      <div className='quotes'>
          <span>“Nếu bạn muốn mọi người hiểu mình, hãy mời họ vào cuộc sống của bạn và để họ nhìn thế giới từ cửa sổ của bạn!”</span>
          <span>– Mehmet Murat ildan – </span>
      </div>
      <div className='categories-section'>
        <Categories_Home />
      </div>
      <div className='Banner-attachment'>
        <BannerAttachment />
      </div>
      <div className='Brands-section'>
        <Brands_Home />
      </div>
    </div>
  )
}

export default Home