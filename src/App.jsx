import { Main } from "./components/Main/Main"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Loan from "./components/Loan/Loan"

import { register } from "swiper/element/bundle"
import Testimonials from "./components/Testimonials/Testimonial"
import Faq from "./components/Faq/Faq"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
register()

function App() {

  return (
    <>
      <Header />
      <Main /> 
      <About />
      <Loan /> 
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
