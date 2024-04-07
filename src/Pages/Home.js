import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Rajwadi from "../Assets/Rajwadi.jpg";
import Pochampally from "../Assets/Pochampally.jpg";
import Tussar from "../Assets/Tussar.jpg";
import Navigation from "../components/navigation.jsx";
import New_arrivals from "../components/new_arrivals.jsx";
import About from "../components/about.jsx";
import Footer from "../components/footer.jsx";
import "../css/Home.css";


const Home = () => {

  const navigate = useNavigate();
 

  return (
    <div className='scroll-container'>        
        <Navigation navigate={navigate} />
        <Fade
          autoplay={true}
          infinite={true}
          onChange={function noRefCheck(){}}
          onStartChange={function noRefCheck(){}}
          indicators={true}
          duration={2000}
          transitionDuration={800}
        >
          <div className="mt-16 ml-3">
            <img src={Rajwadi} alt='img1'></img>
          </div>
          <div className="mt-16 ml-3">
            <img src={Pochampally} alt='img2'></img>
          </div>
          <div className="mt-16 ml-3">
            <img src={Tussar} alt='img3'></img>
          </div>
        </Fade>
        <New_arrivals />
        <About />
        <Footer />
           
    
    
           
    </div>
   
  )
}

export default Home