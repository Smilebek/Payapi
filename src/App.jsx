import Building from './components/building-section/building-section'
import Bussines from './components/bussines-section /bussines-section'
import Easy from './components/easy-section/easy'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Pricing from './components/pricing/pricing'
import Ready from './components/ready-section/ready-section'
import Simple from './components/simple-section/simple-section'
import Work from './components/work-section/work-section'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/ Contact/contact'
import Price from './pages/Price/price'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/price' element={<Price />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>















      {/* <Header />
      <Pricing />
      <Ready />
      <Footer /> */}
    </>
  )
}

export default App
