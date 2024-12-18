import React from 'react'
import Banner from '../layouts/Banner'
import SearchBar from '../layouts/SearchBar'
// import Category from '../layouts/Category'
import Trending from '../layouts/Trending'
import Destination from '../layouts/Destination'
import BestSeller from '../layouts/BestSeller'
// import TourGuides from '../layouts/TourGuides'
import Adds from '../layouts/Adds'
import SubsCribe from '../layouts/SubsCribe'
import Partnars from '../layouts/Partnars'
import Questions from '../layouts/Questions'

const Home = () => {
  return (
    <>
    <Banner />
    <SearchBar />
    {/* <Category /> */}
    <Trending />
    <Destination />
    <BestSeller />
    {/* <TourGuides /> */}
    <Adds />
    <SubsCribe />
    <Partnars />
    <Questions />
    </>
  )
}

export default Home
