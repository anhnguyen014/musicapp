import Featured from "../../components/featured/Featured"
import FeaturedLove from "../../components/featuredLove/FeaturedLove"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyList/PropertyList"

import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Travel around North America</h1>
        <FeaturedProperties/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedLove/>
        <MailList/>
        <Footer/>
      </div>

    </div>
    
    
  )
}

export default Home