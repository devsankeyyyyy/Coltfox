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
import Whatwedomenu from '../pages/whatwedo-menu.jsx';
import Privacypolicy from '../pages/privacy-policy.jsx';
import Blog1 from '../pages/blog-inside1.jsx';
import Faq from '../pages/faq.jsx';
import Whowearemenu from '../pages/whoweare-menu.jsx';

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
      <Route path='/hudbil-services' element={<Hudbilservices/>}/>
      <Route path='/kalacode-services' element={<Kalacodeservices/>}/>
      <Route path='/our-blogs' element={<Ourblogs/>}/>
      <Route path='/blog-1' element={<Blog1/>}/>
      <Route path='/whatwedo-menu' element={<Whatwedomenu/>}/>
      <Route path='/privacy-policy' element={<Privacypolicy/>}/>
      <Route path='/faq' element={<Faq/>}/>
      <Route path='/whoweare-menu' element={<Whowearemenu/>}/>
    </Routes>
  );
};

export default Routers;
