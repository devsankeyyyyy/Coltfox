// cursor.jsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './cursor.css';

export default function Cursor() {
  const CursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const [isActive, setIsActive] = useState(false);
  const [isOverPage6Cont, setIsOverPage6Cont] = useState(false);
  const [isfollowuscontainer,setIsfollowuscontainer] =useState(false);
  const smoothOptions = { damping: 30, stiffness: 250, mass: 0.6 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  const handlePage6ContEnter = () => {
    setIsOverPage6Cont(true);
  };

  const handlePage6ContLeave = () => {
    setIsOverPage6Cont(false);
  };
  const handleIsfollowuscontainerEnter= () => {
    setIsfollowuscontainer(true);
  };
  const handleIsfollowuscontainerLeave= () => {
    setIsfollowuscontainer(false);
  };
  useEffect(() => {
    const buttons = document.querySelectorAll(
      '.whoweare-menu, .whatwedo-menu, .dropdown-menu, .dropdown-menu1, .dropdown-menu2, .dropdown-menu3, .dropdown-menu4, .dropdown-menu5, .dropdown-menu6, button, .content, .content2, .content3, .content4, .content5, .content6, .content7, .content8, a, [role="button"], [type="button"]'
    );

    const page6Conts = document.querySelectorAll('.blogimg,.page5-cont,.page6-cont');
    const followuscontainer= document.querySelectorAll('.follow-us-container')
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX - CursorSize / 2);
      mouse.y.set(clientY - CursorSize / 2);
    };

    window.addEventListener('mousemove', manageMouseMove);

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
    });

    page6Conts.forEach((page6Cont) => {
      page6Cont.addEventListener('mouseenter', handlePage6ContEnter);
      page6Cont.addEventListener('mouseleave', handlePage6ContLeave);
    });
    followuscontainer.forEach((followuscontainer) => {
      followuscontainer.addEventListener('mouseenter', handleIsfollowuscontainerEnter);
      followuscontainer.addEventListener('mouseleave', handleIsfollowuscontainerLeave);
    });

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      });
      page6Conts.forEach((page6Cont) => {
        page6Cont.removeEventListener('mouseenter', handlePage6ContEnter);
        page6Cont.removeEventListener('mouseleave', handlePage6ContLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`cursor ${isActive ? 'active' : ''} ${isOverPage6Cont ? 'over-page6-cont' : ''} ${isfollowuscontainer ? 'over-follow-us-container' : ''}`}
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    >
      {isOverPage6Cont && (
        <img src='./crossarr-w.png'
          style={{
            color: '#000000',
            height: '60px',
            width: '60px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the icon
          }}
        />
      )}
    </motion.div>
  );
}
