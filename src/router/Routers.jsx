/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom'; // Import BrowserRouter as Router

import Generate from '../components/generator/Generator';
import GenerateThen from '../components/generatedThen/GenerateThen';
import Exp from '../components/exp/Exp';
import Services from '../pages/Services.jsx';
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

const Routers = () => {
  return (
    <Routes>
      {/* <Link to="/generate">Generate</Link> */}
      <Route path='/' element={<Home />} />
      <Route path='/generate-qr-code' element={<Generate />} />
      <Route path='/generate-qr-code/:qrCodeId' element={<Generate />} />
      <Route path='/generated-then' element={<GenerateThen/>}/>
      <Route path='/services' element={<Services/>}/>
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
    </Routes>
  );
};

export default Routers;
