/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom'; // Import BrowserRouter as Router

import Contact from '../pages/contact.jsx';
import AboutUs from '../pages/about-us';
import Who from '../pages/who.jsx';
import Approach from '../pages/approach.jsx';
import Achievers from '../pages/achievers.jsx';
import Team from '../pages/team.jsx';
import Industries from '../pages/industries.jsx';
import Home from '../pages/Home.jsx';
import Awards from '../pages/awards.jsx';
import WeDo from '../pages/weDo.jsx';
import Acma from "../pages/acma.jsx";
import Foximpact from "../pages/fox-impact.jsx";
import Permarketing from "../pages/performance-marketing.jsx";
import Hudbilservices from '../pages/hudbil-services.jsx';
import Kalacodeservices from '../pages/kalacode-services.jsx';
import Ourblogs from '../pages/our-blogs.jsx';
import Privacypolicy from '../pages/privacy-policy.jsx';
import Blog1 from '../pages/blog-inside1.jsx';
import Faq from '../pages/faq.jsx';
import Cookiepolicy from '../pages/cookie-policy.jsx';
import Termsofservice from '../pages/terms-of-service.jsx';
import Accessibility from '../pages/accessbility.jsx';
import Omnimarketing from '../pages/omnichannel-marketing.jsx';
import Leadgen from '../pages/lead-generation.jsx';
import Contentmarketing from '../pages/content-marketing.jsx';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/who' element={<Who/>}/>
      <Route path='/approach' element={<Approach/>}/>
      <Route path='/achievers' element={<Achievers/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/industries' element={<Industries/>}/>
      <Route path='/awards' element={<Awards/>}/>
      <Route path='/we-do' element={<WeDo/>}/>
      <Route path='/acma' element={<Acma/>}/>
      <Route path='/fox-impact' element={<Foximpact/>}/>
      <Route path='/performance-marketing' element={<Permarketing/>}/>
      <Route path='/omni-channel-marketing' element={<Omnimarketing/>}/>
      <Route path='/lead-generation' element={<Leadgen/>}/>
      <Route path='/content-marketing' element={<Contentmarketing/>}/>
      <Route path='/hudbil-services' element={<Hudbilservices/>}/>
      <Route path='/kalacode-services' element={<Kalacodeservices/>}/>
      <Route path='/our-blogs' element={<Ourblogs/>}/>
      <Route path='/blog-1' element={<Blog1/>}/>
      <Route path='/privacy-policy' element={<Privacypolicy/>}/>
      <Route path='/cookie-policy' element={<Cookiepolicy/>}/>
      <Route path='/terms-of-service' element={<Termsofservice/>}/>
      <Route path='/accessibility' element={<Accessibility/>}/>
      <Route path='/faq' element={<Faq/>}/>
      
    </Routes>
  );
};

export default Routers;
