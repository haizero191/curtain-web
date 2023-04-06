import React from 'react'
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import "./Home.scss";

const Home = () => {
  return (
    <div className='Home'>
        {/* Section rendered */}
        <div className='Banner-section'>
            <Banner/>
        </div>
        <div className='Category-section'>
            <Categories/>
        </div>
    </div>
  )
}

export default Home