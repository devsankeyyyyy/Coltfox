import React, {useState} from 'react';
import "./fox-impact.css";
import NavbarAndFullscreenMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Foximpact = () => {

  const [activeItem, setActiveItem] = useState("All Work");

  const points = ["All Work", "Digital Marketing", "Content Marketing", "PPC Marketing"];

  const handleClick = (point) => {
    setActiveItem(point);
  };

  return (
    
    <div className='Ourimpact'>
    <NavbarAndFullscreenMenu />
      <div className="Ourimpact-title">The Fox Impact</div>
      <div className='impact-content'>
      <div className='impact-list'>
      {points.map((point, index) => (
        <div 
          key={index} 
          className={`point ${activeItem === point ? 'active' : ''}`} 
          onClick={() => handleClick(point)}
        >
          {point}
        </div>
      ))}
      </div>
      <div className="Ourimpact-cont">
        <div className="impact">
          <img src='./acmaimg.png'/>
        <div className='impact-container'>
          <div className="impact-title">Automotive Component Manufacturers Association of India.</div>
          <div className='impact-des'>
          Working closely with the ACMA team, Associations has transformed the event b2b and b2c search strategy and performance by restructuring search campaigns, rolling out into new territories, and combining their event and Google intelligent bidding to grow digital overall.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./toolstationimg.png'/>
        <div className='impact-container'>
          <div className="impact-title">Tool station launches latest catalog with deals and products.</div>
          <div className='impact-des'>
          The catalog will be available in all 550+ Tool station stores across the UK. To celebrate the launch, Coltfox did help them with hard-to-reach local construction Landing strategy in London and across the capital, making it easier attract deals.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./soloimg.png'/>
        <div className='impact-container'>
          <div className="impact-title">Solo Expenses – App promotion marketing campaign.</div>
          <div className='impact-des'>
          We used Solo to interrogate their audience, using a set of parameters including income and traveling habits. We focused on psycho graphics to find out what made them tick and found that they were very socially responsible and big on supporting local businesses.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./cedevitaimg.png'/>
        <div className='impact-container'>
          <div className="impact-title">Creating an intelligent and seamless experience for an NGO.</div>
          <div className='impact-des'>
          As part of a broader digital strategy, we worked closely with Dignity on their new NGO services. Together, we wanted to push for a fresh take on what could have easily been a traditional products, plans and put digital and customer requirements at the core.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./sockshop.png'/>
        <div className='impact-container'>
          <div className="impact-title">On-site experience for SOCK SHOP to drive conversion & order value.</div>
          <div className='impact-des'>
          Sockshop.co.uk generated a considerable amount of revenue, which accelerated during the pandemic, however when restrictions were lifted, they felt the tide turning and needed to rethink their current digital marketing strategy.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./recimg copy.png'/>
        <div className='impact-container'>
          <div className="impact-title">The REC and future proofing their organization a new brand identity.</div>
          <div className='impact-des'>
          However, despite the influx in recruitment agencies, their membership numbers were hitting a plateau. The business needed to shift with the times to make it more modern, attractive & accessible to a new breed of recruitment firms.The REC identified that a total re brand was necessary to allow them to fulfill their potential.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      <div className="impact">
          <img src='./itv.png'/>
        <div className='impact-container'>
          <div className="impact-title">A new distribution platform for ITV Studios helping them more effectively.</div>
          <div className='impact-des'>
          They realized this was preventing them from providing their customers the kind of online service and experience they expected, which meant they were losing traffic to the site, interest in their programmed and ultimately sales and revenue.
          </div>
          <div className='impact-viewcase'>
            VIEW CASE STUDY <svg width="40" height="18" viewBox="0 0 42 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9.93886H14.5H41M41 9.93886L32.75 1.375M41 9.93886L32.75 19.9921" stroke="#012033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
        </div>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Foximpact