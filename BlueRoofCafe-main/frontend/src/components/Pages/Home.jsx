import Landing from '../ui/Landing';
import ReviewCarousel from '../ui/ReviewCarousel';
import FeedbackForm from '../ui/FeedbackForm';
import About from './About';
import Cafe3D from '../ui/Cafe3D';
import Marquee from '../ui/Marquee';
import React, { useEffect } from 'react';
import MainHOC from '../MainHOC';
import Google from '../Shared/footer/Google';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="home" className="bg-[#F3EEFF]">
      <Landing />
      <Marquee />
      <Cafe3D />
      <About />
      <ReviewCarousel />
      <FeedbackForm />
    </div>
  );
}

export default MainHOC(Home);
