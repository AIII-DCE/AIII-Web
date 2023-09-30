import AboutUs from '../components/AboutUs';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import IntroPage from '../components/IntroPage';
import OurVisionSection from '../components/OurVision.section';

const Main = () => {
  return (
    <div className='block bg-white'>
      <IntroPage />
      <AboutUs />
      <Banner />
      <OurVisionSection />
      <Footer />
    </div>
  )
}

export default Main