import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./Home.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import footer from "../components/footer/footer";
import { delay } from "framer-motion";
import NavbarAndFullscreenMenu from "../components/menu/menu";
import Footer from "../components/footer/footer";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [loading, setLoading] = useState(true);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            titleRef.current.classList.add("animate-slide-in");
          } else {
            titleRef.current.classList.remove("animate-slide-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  const [isMounted, setIsMounted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsMounted(true);

    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (loading) {
      simulateAsyncOperation();
    }

    return () => {
      setIsMounted(false);
    };
  }, [loading]);

  useEffect(() => {
    if (isMounted && !loading) {
      const loadingScreen = document.querySelector(".loading-screen");
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          loadingScreen.style.display = "none";
        },
      });
    }
  }, [isMounted, loading]);

  useEffect(() => {
    setLoading(true);
  }, [location.pathname]);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const typedTextSpan = document.querySelector(".head2-anm");
      const cursorSpan = document.querySelector(".typing-cursor");

      const textArray = [
        "ambitious - brands",
        "to generate",
        "Revenue",
        "Visibility",
        "Engagement",
      ];
      const fillInDelay = 2000;
      const fillOutDelay = 1000;
      const newTextDelay = 2000;

      let textArrayIndex = 0;
      let charIndex = 0;

      function type() {
        if (charIndex < textArray[textArrayIndex].length) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(type, 30);
        } else {
          cursorSpan.classList.remove("typing");
          setTimeout(() => {
            erase();
          }, fillInDelay);
        }
      }

      function erase() {
        if (charIndex > 0) {
          if (!cursorSpan.classList.contains("typing"))
            cursorSpan.classList.add("typing");
          typedTextSpan.textContent = textArray[textArrayIndex].substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(erase, 30);
        } else {
          cursorSpan.classList.remove("typing");
          textArrayIndex++;
          if (textArrayIndex >= textArray.length) textArrayIndex = 0;
          setTimeout(() => {
            type();
          }, fillOutDelay);
        }
      }

      if (isAnimating) {
        setTimeout(() => {
          if (textArray.length) {
            type();
          }
        }, newTextDelay + 250);
      }
    }, 2000);
  }, [isAnimating]);

  useEffect(() => {
    const delay = 200;

    const animationTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => {
      clearTimeout(animationTimeout);
      setIsAnimating(false);
    };
  }, []);

  //page2
  const content = [
    {
      imgSrc: "hudbil-logo.png",
      pContent:
        "HUDBIL delivers B2B engaging designing and development with the latest technology tools to empower business and drive success, at speed and scale.",
      imge: "./line-design-yellow.png",
    },
    {
      imgSrc: "kalacode-logo.png",
      pContent:
        "KALACODE delivers proprietary 3D workflows and is responsible for the world’s firsts in AR, including the world’s largest deployment of WebAR.",
      imge: "./line-design-yellow2.png",
    },
    {
      imgSrc: "maus-logo.png",
      pContent:
        "MAUS is a ‘Gen-Z’ Product that allows users to use their mobile phones as an exclusive mouse without wires and other connections. A user journey touch point.",
      imge: "./line-design-yellow3.png",
    },
    {
      imgSrc: "expandedlogo.png",
      pContent:
        "Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.",
      imge: "./line-design-yellow4.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeContent = () => {
      gsap.to(".comp-c img, .comp-c p", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setContentPrevState(),
      });
    };

    const setContentPrevState = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      gsap.to(".comp-c img, .comp-c p", { opacity: 1, duration: 0.5 });
    };

    const contentChangeInterval = setInterval(changeContent, 5000);

    return () => clearInterval(contentChangeInterval);
  }, [currentIndex, content]);
  //page3
  const movableRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(0);

  const contents = [
    "Our tenacious team of proven digital marketing experts and business growth pros push the boundaries of what is possible. GIANT harnesses the power of data analytics to understand customer behaviours and preferences.",
    "Our strength lies in our commitment to data-driven performance solutions designed to increase lead generation, customer acquisition, and audience engagement.",
    "Marketing isn’t a one-off activity but a continuous process. We act as an extension to your organization, connecting the dots between ideas, strategy, and technology to deliver long-term, sustainable solutions.",
  ];
  const image = [
    "./line-design-yellow.png",
    "./line-design-yellow2.png",
    "./line-design-yellow3.png",
  ];

  useEffect(() => {
    const animateContent = () => {
      gsap.to(movableRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          movableRef.current.textContent = contents[contentIndex];

          setContentIndex((prevIndex) =>
            prevIndex === contents.length - 1 ? 0 : prevIndex + 1
          );

          gsap.to(movableRef.current, {
            opacity: 1,
            duration: 1,
          });
        },
      });
    };

    const interval = setInterval(animateContent, 5000);

    return () => clearInterval(interval);
  }, [contentIndex]);
  //page4
  const [selectedService, setSelectedService] = useState(
    "Performance Marketing"
  );

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName);
  };
  //page5
  const containerRef = useRef();
  const [selectedBox, setSelectedBox] = useState("acma");
  useEffect(() => {
    const container = containerRef.current;
    const title = container.querySelector(".page5-title");
    const description = container.querySelector(".page5-des");

    // Set initial styles without animation
    gsap.set([title, description], {
      opacity: 1,
    });

    const handleMouseOver = () => {
      gsap.fromTo([title, description], {
        opacity: 1,
      });
    };

    container.addEventListener("mouseover", handleMouseOver);

    return () => {
      container.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const handleBoxClick = (boxId) => {
    setSelectedBox(selectedBox === boxId ? null : boxId);

    const page5Cont = containerRef.current;

    switch (boxId) {
      case "acma":
        page5Cont.style.backgroundImage = 'url("/acmaimg.png")';
        break;
      case "toolstation":
        page5Cont.style.backgroundImage = 'url("/toolstationimg.png")';
        break;
      case "solo":
        page5Cont.style.backgroundImage = 'url("/soloimg.png")';
        break;
      case "cedevita":
        page5Cont.style.backgroundImage = 'url("/cedevitaimg.png")';
        break;
      default:
        page5Cont.style.backgroundImage = "none";
        break;
    }
  };
  //page6
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page6-container",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    document.querySelectorAll(".page6-cont").forEach((el, index) => {
      tl.fromTo(
        el,
        { x: "185%" },
        { x: "0%", duration: 0.7, opacity: 1 },
        `-=${index === 0 ? 0 : 0.5}`
      );
    });
  }, []);
  //page7
  const sectionRefs = useRef([]);
 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  sectionRefs.current.forEach((section, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onEnter: () => {
          const textElements = section.querySelectorAll(
            ".section-title, .sec-des1, .sec-des2, .sec-des3, .learn-m"
          );

          // Add border to page7-line and animationLogo
          const borderElements = section.querySelectorAll(".page7-divider, .animationLogo");
          gsap.to(borderElements, { border: "2px solid #df2323" });
          const AnimationElements = section.querySelectorAll(".animationLogo");
          gsap.to(AnimationElements, { border: "3px solid #df2323",borderRadius:"200px",background:'' });
          gsap.to(textElements, { opacity: 1 });

          sectionRefs.current.forEach((otherSection, otherIndex) => {
            if (otherIndex !== index) {
              const otherTextElements = otherSection.querySelectorAll(
                ".section-main, .sec-desc1, .sec-desc2, .sec-desc3, .learn-m"
              );
              gsap.to(otherTextElements, { opacity: 0 });

              const otherBorderElements = otherSection.querySelectorAll(".page7-divider, .animationLogo");
              gsap.to(otherBorderElements, { border: "2px solid transparent" });
              const BorderElements = otherSection.querySelectorAll(".animationLogo");
              gsap.to(BorderElements, { border: "2px solid white",background:'none',borderRadius:"200px" });
            }
          });
        },
        onLeaveBack: () => {
          const textElements = section.querySelectorAll(
            ".section-main, .sec-desc1, .sec-desc2, .sec-desc3, .learn-m"
          );
          const Elements = section.querySelectorAll(".animationLogo");
          gsap.to(Elements, { border: "3px solid #df2323",borderRadius:"200px",background:'',ease:'power.in',duration:0.5 });

          gsap.to(textElements, { opacity: 1 });
          const borderElements = section.querySelectorAll(".page7-divider, .animationLogo");
          gsap.to(borderElements, { border: "2px solid #df2323" });
           const AnimationElements = section.querySelectorAll(".animationLogo");
          gsap.to(AnimationElements, { border: "3px solid #df2323",borderRadius:"200px" });

          sectionRefs.current.forEach((otherSection, otherIndex) => {
            if (otherIndex !== index) {
              const otherTextElements = otherSection.querySelectorAll(
                ".section-main, .sec-desc1, .sec-desc2, .sec-desc3, .learn-m"
              );
              gsap.to(otherTextElements, { opacity: 0 });
               const otherBorderElements = otherSection.querySelectorAll(".page7-divider, .animationLogo");
              gsap.to(otherBorderElements, { border: "2px solid white" });
               const BorderElements = otherSection.querySelectorAll(".animationLogo");
              gsap.to(BorderElements, { border: "3px solid white",background:'none',borderRadius:"200px" });
            }
          });
        },
        onLeave: () => {
          const textElements = section.querySelectorAll(
            ".section-main, .sec-desc1, .sec-desc2, .sec-desc3, .learn-m"
          );

          gsap.to(textElements, { opacity: 1 });
const BorderElements = section.querySelectorAll(".animationLogo");
              gsap.to(BorderElements, { border: "3px solid #df2323",background:'',opacity:1,borderRadius:"200px" });
          sectionRefs.current.forEach((otherSection, otherIndex) => {
            if (otherIndex !== index) {
              const otherTextElements = otherSection.querySelectorAll(
                ".section-main, .sec-desc1, .sec-desc2, .sec-desc3, .learn-m"
              );
              gsap.to(otherTextElements, { opacity: 0 });
               const BorderElements = otherSection.querySelectorAll(".animationLogo");
              gsap.to(BorderElements, { border: "3px solid white",background:'none',opacity:1,borderRadius:"200px" });
            }
          });
        },
      },
    });
  });
}, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(".logo-container", {
        opacity: 1,
        duration: 0.2,
        ease: "power2.in",
      });

      gsap.to(".logo-container", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        delay: 1.5,
      });
      const hideLoadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 4000);

      return () => clearTimeout(hideLoadingTimeout);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const containerRef1 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef1.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //       once: true, // Play the animation only once
  //     },
  //   });
  // }, []);
  const containerRef2 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef2.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });
  // }, []);
  const containerRef3 = useRef(null);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const container = containerRef3.current;

  //   gsap.from(container, {
  //     y: '100%', // Start from below the viewport
  //     opacity: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: container,
  //       start: 'top 80%', // Adjust the trigger start position as needed
  //       end: 'top center',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });
  // }, []);

  return (
    <div>
      {/* page1 */}
      {/* Loading screen */}
      {loading && (
        <div
          className=""
          style={{
            background: 'url("/greypaper.jpeg")',
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10000,
          }}
        >
          <img
            className="logo-container"
            src="./logo.png"
            alt="Logo"
            style={{ zIndex: "100000000", maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
      )}

      <div className="bg-[#f2f2f2] flex flex-col overflow-hidden">
  <NavbarAndFullscreenMenu />
  <div className="flex flex-col px-10 pt-8 md:px-12 xl:px-44 lg:flex-row justify-between">
  <div>
    <h1 className="text-[#df2323] font-semibold text-4xl md:text-[3rem] lg:text-[4.5rem] mb-6 sm:mb-20 leading-tight">
      We help
    </h1>
    <p className="animation mb-6 sm:mb-20">
        <span className="head2-anm bg-[url('/yellowpaper.jpeg')] text-3xl md:text-[3rem] lg:text-[4.5rem] bg-cover rounded-full text-[#1f1f21] font-semibold leading-tight px-4 py-2 sm:px-8 sm:py-4"></span>
        <span className="typing-cursor"></span>
      </p>
    <h1 className="text-[#df2323] font-semibold text-4xl md:text-[3rem] lg:text-[4.5rem] mb-6 sm:mb-20 leading-tight">
      by marketing
    </h1>
  </div>
  <div className="flex flex-col justify-between mt-8 sm:mt-0 w-fit">
      <button className="mt-auto mb-0 sm:mb-20 rounded-full bg-white border border-[#fcab64] flex items-center justify-center text-black text-base sm:text-lg md:text-xl px-4 py-1 gap-2 shadow-[4px_8px_19px_-3px_#fcab64] hover:bg-[#fcab64] hover:text-white transition duration-500">
        Let's talk <img src="./arr-b.png" alt="Arrow" className="w-5 md:w-6" />
      </button>
  </div>
  </div>
</div>





      <div className="page2-container px-4 lg:px-8 sm:py-6 md:py-8 lg:py-0 xl:py-0 2xl:py-0">
  <div className="page2-rect bg-white rounded-3xl shadow-md w-full px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-4 xl:gap-10 2xl:gap-12">

    <div className="page2-right ml-0 lg:mt-0 w-full md:w-1/2 px-2 sm:px-4 ">
      <button className="weare w-1/2 sm:w-1/3 h-47px rounded-full bg-white flex items-center justify-center text-black text-16px px-18px gap-8 box-shadow-2px-4px sm:px-4 sm:py-2 md:text-base lg:text-lg xl:text-xl">
        Who We Are
      </button>
      <div ref={titleRef} className="page2-title pt-10 text-[#df2323] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        Our Brands
      </div>
      <div className="page2-description font-poppins text-[#1F1F21] font-normal text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed md:leading-loose">
        Hudbil Private Limited is a reliable company, with multiple brands under one umbrella. We are here to enable you with top-notch digital solutions & products through a proven cost-saving model. This allows you to scale, optimize, expand, and enhance your business with an individual approach. This is our game style.
      </div>
    </div>
    
    <div className="comp-cards w-full md:w-1/2 flex flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
      <div className="brand flex flex-col gap-20">
        {[0, 1, 2].map((index) => (
          <div className=" comp-c bg-[#d9d3d3] rounded-100px mt-0 flex justify-center items-center flex-col px-0 py-0 w-1/2" key={index}>
            <img
              src={content[(currentIndex + index) % content.length].imgSrc}
              alt=""
              className="w-2/3 h-[20%]"
            />
            <p className="mt-4 font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-center">
              {content[(currentIndex + index) % content.length].pContent}
            </p>
            <button className="learnmore  rounded-full bg-white flex items-center justify-center text-black text-16px gap-10px sm:mt-4 px-4 sm:px-6 sm:py-2">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="text-black text-1.5rem ml-2" />
            </button>
            <div className="comp-line-design mt-6">
              <img
                src={content[(currentIndex + index) % content.length].imge}
                alt="line design"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

    


      {/*page3*/}
      <div className="page3-container">
        <div className="pt-16 h-auto">
          <div className="bg-[#fcab64]">
            <div className="section-heading-content section-heading bg-[#fcab64]">
              Our passion lies in working closely with our clients to develop
              valuable digital marketing tailored to their needs.
            </div>
          </div>
        </div>

        <div className="mt-5 ml-4 lg:mr-20 lg:ml-80 xl:ml-auto page3-right lg:w-[45%]">
  <button className="aboutus bg-white border border-black flex items-center mt-12 mb-7 font-poppins font-medium text-black text-base lg:text-lg px-4 py-2 rounded-full gap-2 hover:bg-orange-400 hover:text-white hover:shadow-lg transition duration-500 ease-in-out">
   <Link to="/who">About Us</Link> 
  </button>
  <div className="stable-des mt-5 font-poppins text-base lg:text-lg pr-4 lg:pr-7 text-[#012033] mb-5 max-w-full lg:max-w-2xl leading-normal lg:leading-9">
    Coltfox is not your typical digital marketing agency. We’re a strategic marketing firm that partners with clients to move their business forward. We’re bold. We’re curious. We’re transparent.
  </div>
  <div className="movable-des pr-4 lg:pr-7 inline-flex flex-col font-poppins text-[#012033] leading-normal lg:leading-9 text-base lg:text-lg font-normal max-w-full lg:max-w-2xl text-left pb-2.5">
    <div ref={movableRef} className="movable h-auto lg:h-31.25 font-poppins text-base lg:text-lg text-[#012033] pr-4 lg:pr-10 mb-3.75 max-w-full lg:max-w-2xl">
      {contents[contentIndex]}
    </div>
  </div>
  <div className="flex justify-center pt-8 mr-8 lg:mx-auto">
    <img src={image[contentIndex]} alt="Line Design" />
  </div>
  <button className="findmore-btn lg:mx-auto">
            Find out more
            <img src="./arr-b.png" className="page3-arr" alt="Arrow" />
          </button>
</div>

      </div>

      {/*page4*/}
      <div className="page4-container">
        <div className="page4-left lg:ml-10">
          <button className="whatwedo-btn"><Link to="/we-do">What We Do</Link></button>
          <div className="page4-title">Our Services</div>
          <div className="page4-des lg:w-full">
            Creative solutions from strategy through omni- channels placements
            to engag, acquire, and transform brands for sustained growth.
          </div>
          <div className="page4-line" />
          <content5>
            <div
              className="perf"
              onClick={() => handleServiceClick("Performance Marketing")}
            >
              <div className="srno">01</div>
              <div className="innertitle">Performance Marketing</div>
              <FontAwesomeIcon className="page4-arr" icon={faArrowRight} />
            </div>
          </content5>
          <div className="page4-line" />
          <content6>
            <div
              className="perf"
              onClick={() => handleServiceClick("Omni-channel Marketing")}
            >
              <div className="srno">02</div>
              <div className="innertitle">Omni - channel Marketing</div>
              <FontAwesomeIcon className="page4-arr" icon={faArrowRight} />
            </div>
          </content6>
          <div className="page4-line" />
          <content7>
            <div
              className="perf"
              onClick={() => handleServiceClick("Lead Generation")}
            >
              <div className="srno">03</div>
              <div className="innertitle">Lead Generation</div>
              <FontAwesomeIcon className="page4-arr" icon={faArrowRight} />
            </div>
          </content7>
          <div className="page4-line" />
          <content8>
            <div
              className="perf"
              onClick={() => handleServiceClick("Content Marketing")}
            >
              <div className="srno">04</div>
              <div className="innertitle">Content Marketing</div>
              <FontAwesomeIcon className="page4-arr" icon={faArrowRight} />
            </div>
          </content8>
          <div className="page4-line" />
          <button className="expl">
            Explore Services
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                color: "#000000",
                height: "25px",
                width: "20px",
                transform: "rotate(-45deg)",
              }}
            />
          </button>
        </div>
        <div className="page4-right mt-4 lg:mt-24">
          <div className="changing-desof">
            <div className="innertitl flex text-xl mb- lg:gap-4 ">
            
              {selectedService}
              <Link to={`/${selectedService.toLowerCase().replace(/ /g, '-')}`}>
              <img src="./arr-w-learn.png" alt="Learn more" className="w-full p-0 h-[100%]" /></Link>
            </div>
            {selectedService === "Performance Marketing" && (
              <div className="titldes mt-4">
                ROIs are at the heart of performance marketing, as every action
                can be tracked and measured against key performance indicators
                (KPIs). Whether it be the number of clicks, page views or sales,
                these key metrics are crucial to measuring and enhancing
                performance
              </div>
            )}
            {selectedService === "Omni-channel Marketing" && (
              <div className="titldes">
                Your customers will be happier in the long term if they feel
                they have several methods to reach your customer service and
                sales teams. Or if they can purchase your product easily
                regardless of their device or preferred platform.
              </div>
            )}
            {selectedService === "Lead Generation" && (
              <div className="titldes">
                {" "}
                Lead Generation brings the right opportunities into your sales
                teams’ calendars. We grow your pipeline by managing research,
                campaign creation, outbound sales and inbox management. We work
                as your lead gen department taking care of all the
                time-consuming top-of-funnel.
              </div>
            )}
            {selectedService === "Content Marketing" && (
              <div className="titldes">
                Reach your marketing goals with a content strategy that helps
                you find your strongest stories, reach the right people, measure
                your success, and do it all as efficiently as possible.
                Supporting the growth of your business.
              </div>
            )}
          </div>
        </div>
      </div>
      {/*page5*/}
      <div className="page5-container px-4 lg:px-20 flex flex-col py-16 lg:py-24 overflow-hidden">
        <Link to="/fox-impact">
        <button className="seeall-btn mt-[-42px] mb-2.5 ml-auto flex">
          Case Studies <img src="./arr-w-learn.png" />
        </button>
        </Link>
        <div className="page5-cont mt-10 mb-10 lg:mb-0 w-full h-full" ref={containerRef}>
          <div className="page5-title">
            {selectedBox ? selectedBox.toUpperCase() + "." : ""}
          </div>
          <div className="page5-des w-full">
            {selectedBox &&
              (selectedBox === "acma"
                ? "Automotive Component Manufacturers Association of India"
                : selectedBox === "toolstation"
                  ? "Tool station launches latest catalog with deals and products"
                  : selectedBox === "solo"
                    ? "Solo Expenses – App promotion marketing campaign"
                    : selectedBox === "cedevita"
                      ? "Creating an intelligent and seamless experience for an NGO."
                      : "")}
          </div>
          <Link to={`/${selectedBox.toLowerCase().replace(/ /g, '-')}`}>
          <button className="viewproj-btn mt-[55%] mb-6 ml-[4%]">
            View Project
            <img src="./arr-w-learn.png" />
          </button>
          </Link>
        </div>
        <div className="page5-box mb-0 mt-auto lg:mt-80 pb-8">
          <img
            src={
              selectedBox &&
              (selectedBox === "acma"
                ? "./line-design-red1.png"
                : selectedBox === "toolstation"
                  ? "./line-design-red2.png"
                  : selectedBox === "solo"
                    ? "./line-design-red3.png"
                    : selectedBox === "cedevita"
                      ? "./line-design-red4.png"
                      : "./line-design-red.png")
            }
            style={{ position: "absolute", left: "95%", top: "50%" }}
          />
          <button className="whatwedid-btn">What We Did</button>
          <div className="box-cont">
            <content>
              <div
                className={`box-brand ${selectedBox === "acma" ? "open-brand" : ""
                  }`}
                onClick={() => handleBoxClick("acma")}
              >
                ACMA.
                <img src="./crossarr-w.png" />
              </div>
            </content>
            {selectedBox === "acma" && (
              <>
                <div className="box-des w-fit sm:w-[90%]">
                  Working closely with the ACMA team, Associations has
                  transformed the event b2b and b2c search strategy and
                  performance by restructuring search campaigns, rolling out
                  into new territories, and combining their event and Google
                  intelligent bidding to grow digital overall.
                </div>
                <div className="boxmid-s">
                  <div className="whitebox">SMM</div>
                  <div className="whitebox">Content Writing</div>
                  <div className="whitebox">Strategy</div>
                </div>
              </>
            )}
            <content2>
              <div
                className={`box-brand ${selectedBox === "toolstation" ? "open-brand" : ""
                  }`}
                onClick={() => handleBoxClick("toolstation")}
              >
                Toolstation.
                <img src="./crossarr-w.png" />
              </div>
            </content2>
            {selectedBox === "toolstation" && (
              <>
                <div className="box-des w-fit sm:w-[90%]">
                  The catalog will be available in all 550+ Tool station stores
                  across the UK. To celebrate the launch, Coltfox did help them
                  with hard-to-reach local construction Landing strategy in
                  London and across the capital, making it easier attract deals.
                </div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
            <content3>
              <div
                className={`box-brand ${selectedBox === "solo" ? "open-brand" : ""
                  }`}
                onClick={() => handleBoxClick("solo")}
              >
                Solo.
                <img src="./crossarr-w.png" />
              </div>
            </content3>
            {selectedBox === "solo" && (
              <>
                <div className="box-des w-fit sm:w-[90%]">
                  Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime
                  debitis aut neque cupiditate At voluptas autem qui officiis
                  exercitationem? Vel doloribus sint et porro aliquid ut nihil
                  quaerat aut enim nihil ea voluptatem sunt quo quod odit.
                </div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
            <content4>
              <div
                className={`box-brand ${selectedBox === "cedevita" ? "open-brand" : ""
                  }`}
                onClick={() => handleBoxClick("cedevita")}
              >
                Cedevita.
                <img src="./crossarr-w.png" />
              </div>
            </content4>
            {selectedBox === "cedevita" && (
              <>
                <div className="box-des w-fit sm:w-[90%]">
                  Lorem ipsum dolor sit amet. Qui cumque deleniti sed maxime
                  debitis aut neque cupiditate At voluptas autem qui officiis
                  exercitationem? Vel doloribus sint et porro aliquid ut nihil
                  quaerat aut enim nihil ea voluptatem sunt quo quod odit.
                </div>
                <div className="boxmid-s">
                  <div className="whitebox">Leads</div>
                  <div className="whitebox">Content</div>
                  <div className="whitebox">Marketing</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/*page6*/}
      <div className="page6-container">
        <button className="howdowe-btn">How We Do It</button>
        <div className="page6-title" ref={containerRef3}>
          Process & Approach
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-8 lg:mb-24 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-[54px]">
            1. <div className="innert">Requirements</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-[20px] leading-tight lg:leading-normal">
            Our initial meeting or call will identify your objectives and
            decipher exactly how we can help. This involves some deep digging
            into your company, your competitors, your audience and, most
            importantly, what you want to achieve.
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-8 lg:mb-24 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-[54px]">
            2. <div className="innert">Strategy</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-[20px] leading-tight lg:leading-normal">
            We begin to explore all the possible avenues your business could
            take and we develop a custom strategy to hit your business goals,
            underpinned by a strategic digital plan. This is the step where no
            idea is a bad idea; really anything goes!
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-8 lg:mb-24 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-[54px]">
            3. <div className="innert">Launch</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-[20px] leading-tight lg:leading-normal">
            After refining the concept we execute the final solution, always in
            budget and always on time. We'll be on hand to closely monitor the
            launch and keep you updated We track the project or campaign to
            ensure the results match your objectives.
          </div>
        </div>
        <div className="page6-cont mt-10 mx-auto flex flex-col items-center justify-around p-1 md:p-4 mb-8 lg:mb-24 overflow-hidden lg:flex-row">
          <div className="protitle mx-2 lg:ml-10 flex items-center justify-center gap-0 lg:gap-7 text-xs md:text-xl lg:text-[54px]">
            4. <div className="innert">Enhance</div>
          </div>
          <div className="prodes flex items-center justify-center ml-0 px-1 lg:ml-14 my-2 lg:my-16 w-full text-xs lg:text-[20px] leading-tight lg:leading-normal">
            Here we refine and optimise the project or campaign to maximise ROI
            and highlight key successes to carry into future projects. We cycle
            through a series of continuous improvement sprints to maximise and
            achieve optimum performance.
          </div>
        </div>
        <div className="page6-endcont">
          <p>
            For over a <div className="endcont-style">decade</div>, we’ve been
            delivering ‘Marketing Experience’ that will amaze you
          </p>
          <div className="end-date mt-6 text-sm">Since 2016</div>
        </div>
      </div>
      
      {/*page7*/}

      <div className="bg-[url('/yellowpaper.jpeg')] bg-cover min-h-[90vh] flex flex-col items-start text-center p-4 md:p-10 lg:pl-20 lg:pb-36 overflow-hidden">
    <button className="mt-2 w-44 h-9 rounded-full bg-white flex items-center justify-center font-poppins font-medium text-black text-sm px-4 shadow hover:bg-orange-400">
        What We Focus
    </button>
    <div className="mt-5 text-red-600 font-poppins font-bold text-4xl md:text-6xl lg:text-8xl">
        Industries
    </div>
    <div className="mt-5 text-left lg:w-[65%] text-white font-poppins font-medium text-md md:text-lg lg:text-2xl leading-normal md:leading-relaxed">
        Regardless of your operation’s size, collaboration toward a shared goal leads to success.
    </div>
    <div className="flex flex-col mt-10 lg:w-full text-left relative gap-12">
        {/* Section 1 */}
        <div className="section1 lg:w-4/5" ref={(ref) => (sectionRefs.current[0] = ref)}>
            <div className="section-main text-white font-poppins font-bold text-3xl md:text-4xl lg:text-5xl">
                FRANCHISES
            </div>
            <div className="page7-divider w-3/5 h-px bg-gray-300 mt-4"></div>
            <div className="sec-logo">
                <img src="./sec1-logo.png" alt="Franchises" className="animationLogo w-60 h-60 md:w-80 md:h-80 absolute right-48 top-[40%]"/>
            </div>
            <div className="sec-desc1 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base lg:text-lg leading-relaxed">
                Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
                Learn More <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
        </div>
        {/* Section 2 */}
        <div className="section2 lg:pl-[40px]" ref={(ref) => (sectionRefs.current[1] = ref)}>
            <div className="section-main text-white font-poppins font-bold text-3xl md:text-4xl lg:text-5xl">
            NON-PROFITS
            </div>
            <div className="page7-divider w-3/5 h-px bg-gray-300 mt-2"></div>
            <div className="sec-logo">
                <img src="./sec2-logo.png" alt="Franchises" className="animationLogo w-60 h-60 md:w-80 md:h-80 absolute right-44 top-[40%]"/>
            </div>
            <div className="sec-desc2 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base lg:text-lg leading-relaxed">
                Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
                Learn More <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
        </div>
        {/* Section 3 */}
        <div className="section3 lg:w-4/5" ref={(ref) => (sectionRefs.current[2] = ref)}>
            <div className="section-main text-white font-poppins font-bold text-3xl md:text-4xl lg:text-5xl">
                E-COMMERCE
            </div>
            <div className="page7-divider w-3/5 h-px bg-gray-300 mt-2"></div>
            <div className="sec-logo">
                <img src="./sec3-logo.png" alt="Franchises" className=" animationLogo w-60 h-60 md:w-80 md:h-80 absolute right-48 top-[40%]"/>
            </div>
            <div className="sec-desc3 lg:w-1/2 mt-2 text-white font-poppins font-normal text-base lg:text-lg leading-relaxed">
                Not only do we increase B2B leads for franchisors, we also help home-town franchisees generate new customers and increase customer loyalty.
            </div>
            <button className="learn-m w-fit mt-5 h-10 border border-white rounded-full px-5 flex items-center justify-between gap-5">
                Learn More <img src="./arr-w-learn.png" alt="Learn More" className="w-10" />
            </button>
        </div>

    </div>
</div>


      {/*page8*/}
      <div className="page8-container">
        <button className="whattheysay-btn">What They Say</button>

        <div className="page8-title" ref={containerRef2}>
          Clients
        </div>
        <div className="page8-des">
          We’ve partnered with some truly amazing brands and organizations –
          locally, nationally, and internationally.
        </div>

        <div className="page8-scroller1">
          <div className="scroll1-grp1">
            <div className="elem1">
              <img src="./logo-1.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-2.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-3.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-4.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-5.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-6.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-7.png" alt="usaid_logo logo" />
            </div>
          </div>
          <div className="scroll1-grp1">
            <div className="elem1">
              <img src="./logo-1.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-2.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-3.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-4.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-5.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-6.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./logo-7.png" alt="usaid_logo logo" />
            </div>
          </div>
        </div>
        

        <div className="page8-scroller2">
          <div className="scroll2-grp1">
            <div className="elem2">
              <img src="./acma-logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./nuta_logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./scoro_logo.png" alt="scoro_logo" />
            </div>
            <div className="elem2">
              <img src="./cht_logo.png" alt="cht_logo" />
            </div>
          </div>
          <div className="scroll2-grp1">
            <div className="elem2">
              <img src="./acma-logo.png" alt="acma logo" />
            </div>
            <div className="elem2">
              <img src="./nuta_logo.png" alt="nuta_logo" />
            </div>
            <div className="elem2">
              <img src="./scoro_logo.png" alt="scoro_logo" />
            </div>
            <div className="elem2">
              <img src="./cht_logo.png" alt="cht_logo" />
            </div>
          </div>
        </div>
      </div>
      
      {/* page9 */}
      <div className="page9-container">
        <div className="page9-cont lg:px-8 w-full flex flex-col lg:flex-row justify-between lg:gap-28">
          <div className="page9-right ml-0 lg:w-1/3" ref={containerRef1}>
            <div className="page9-title">Its all about our clients. </div>
            <div className="page9-subtitle text-[28px] lg:text-[40px]">(and what they say!)</div>
          </div>
          <div className="page9-des w-1/2 pl-0 lg:w-2/3 gap-30">
            <Slider {...settings}>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">Roatan Real Estate</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  Coltfox is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of all your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do. - Marci Wiersma{" "}
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">Sterling Protective</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  We re-did our website twice in a 12 month period. There was no
                  comparison between the first company and Coltfox.
                  Professional, Creative, Attentive to Detail, Excellent
                  Communication…If I had contracted with Thrive the first time I
                  would not have had to do it twice. - Mohan Das
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">Gibbs Inc</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  Coltfox has been instrumental in helping us build an
                  incredible lead generating machine through our AdWords and
                  remarketing campaigns. Working with Azrael is a pleasure; with
                  his guidance we have seen an increase in lead flow, tremendous
                  efficiency and a very solid ROI.. - Vaneesa
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">JEF Techno</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  Coltfox has been instrumental in providing excellence in
                  digital marketing. We are continuously impressed with their
                  level of service and consider them a key marketing partner in
                  helping drive our business. They are not only proactive and
                  responsive, but also at the forefront marketing space - BG
                  Prashanth
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">D-Capital Inc</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  We enjoyed working with coltfox on our new website. The team
                  had lots of ideas to make the website look great, as well as
                  practical advice to ensure the site is both user-friendly and
                  SEO-friendly. Everyone is delighted with the end result. -
                  Sindu Umadevan
                </div>
              </div>
              <div className="mr-auto lg:gap-30 flex flex-col w-1/2">
                <div className="comp-name pl-[30px] lg:pl-[50px]">Lakshmi Corporation</div>
                <div className="sign">“</div>
                <div className="comp-review w-fit pl-[30px] lg:pl-[50px] lg:w-[50%] mb-10 ml-0">
                  We have been working with Coltfox for several years and
                  continue to be impressed with their professionalism. We work
                  closely with the Coltfox team to meet our goals and
                  objectives, and each year we are able to generate 40% of our
                  leads through Google.- Kishor Kumar Swamy
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>


      {/* page10 */}
      <div className="page10-container">
        <button className="whatweread-btn">What We Read</button>
        <div className="page10-title">Our Blogs</div>
        <div className="page10-subtitle">
          Be inspired and informed.{" "}
          <button className="ournews-btn">
            Our News
            <img src="./arr-b.png" />{" "}
          </button>
        </div>
        <div className="page10-line" />

        <div className="page10-cont flex-col lg:flex-row lg:gap-8 lg:mx-8">
          <div className="page10-blog1 lg:w-1/2">
            <img src="./firstblog.png" className="blogimg" />
            <div className="expand-blog">
              <div className="expand-content">
                <img
                  src="./page10-insideimg.png"
                  className="rotating-img"
                  alt=""
                />
                <img className="blog-arr" src="./page10-arrw.png" alt="" />
              </div>
            </div>
            <div className="blog-des flex justify-between pl-0">
              <div className="para sm:text-[20px] lg:text-[30px] w-5/6">
                First - party data in marketing - what you need to know ?
              </div>
              <Link to="/blog-1">
              <button className="gotoblog-btn ml-0 mt-0">
                <img src="./crossarrimg.png" />
              </button>
              </Link>
            </div>
            <div className="blog-btn">MARKETING AND DATA</div>
          </div>
          <div className="page10-blog2 lg:w-1/2">
            <img src="./secondblog.png" className="blogimg" />
            <div className="expand-blog">
              <div className="expand-content">
                <img
                  src="./page10-insideimg.png"
                  className="rotating-img"
                  alt=""
                />
                <img className="blog-arr" src="./page10-arrw.png" alt="" />
              </div>
            </div>
            <div className="blog-des flex justify-between pl-0">
              <div className="para sm:text-[20px] lg:text-[30px] w-5/6">
              The power of performance creative in modern marketing
              </div>
              <Link to="/blog-2">
              <button className="gotoblog-btn ml-0  mt-0">
                <img src="./crossarrimg.png" />
              </button>
              </Link>
            </div>
            <div className="blog-btn">SOCIAL MEDIA MARKETING</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
