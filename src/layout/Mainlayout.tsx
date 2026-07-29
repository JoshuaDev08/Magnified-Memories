import Navbar from './Navbar'
import Hero from '../sections/Hero'
import OurBooths from '../sections/Booth'
import HowItWorks from '../sections/How_it_works'
import WhyUs from '../sections/Why_choose_us'
import Gallery from '../sections/Gallery'
import Pricing from '../sections/Pricing'
import Testimonials from '../sections/Testimonials'
import CTABanner from '../sections/CTAbanner'

const Mainlayout = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <OurBooths />
        <HowItWorks />
        <WhyUs />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTABanner />
    </>
  )
}

export default Mainlayout