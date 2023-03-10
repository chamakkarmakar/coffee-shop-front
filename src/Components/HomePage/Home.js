import React from 'react'
import Speciality from './CoffeeSpeciality/Speciality'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import Banner from './Header/Banner'
import Products from './Products/Products'


const Home = () => {
  return (
    <div>   
      <Banner />
      <Speciality />
      <Products />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home
