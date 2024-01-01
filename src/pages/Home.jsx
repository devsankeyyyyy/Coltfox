import React, { useState, useEffect, useRef } from "react";
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
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page7-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    sectionRefs.current.forEach((section, index) => {
      tl.fromTo(
        section,
        { opacity: 0, y: 0 },
        { opacity: 1, y: 0, duration: 1 },
        `-=${index === 0 ? 0 : 0.5}`
      );
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
      <div className="main-container">
        <NavbarAndFullscreenMenu />
        <div className="page1-content">
          <div className="head1 ">We help</div>
          <p className="animation">
            <span className="head2-anm"></span>
            <span className="typing-cursor"></span>
          </p>

          <div className="head3">by marketing</div>

          <div className="pr-52">
            <button className="talk-btn">
              Let's talk <img src="./arr-b.png" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      {/*page2*/}
      <div className="page2-container">
        <div className="page2-rect">
          <div className="page2-right">
            <button className="weare">Who We Are</button>
            <div ref={titleRef} className="page2-title">
              Our Brands
            </div>
            <div className="page2-description">
              Hudbil Private Limited is an reliable company, with multiple
              brands under the one umbrella. We are here to enable you with
              top-notch digital solutions & products through a proven
              cost-saving model. This allows you to scale, optimize, expand, and
              enhance your business. with an individual approach. This is our
              game style.
            </div>
          </div>
          <div className="comp-cards">
            <div className="brand">
              {[0, 1, 2].map((index) => (
                <div className="comp-c" key={index}>
                  <img
                    src={
                      content[(currentIndex + index) % content.length].imgSrc
                    }
                    alt=""
                    style={{
                      marginTop:
                        index === 1 ? "25px" : index === 2 ? "150px" : "0",
                    }}
                  />
                  <p>
                    {content[(currentIndex + index) % content.length].pContent}
                  </p>
                  <button className="learnmore">
                    Learn more
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#000000", fontSize: "1.5rem" }}
                    />
                  </button>
                  <div className="comp-line-design">
                    <img
                      src={
                        content[(currentIndex + index) % content.length].imge
                      }
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
        <div className="pt-16">
          <div className="bg-[#fcab64]">
            <div className="section-heading-content section-heading bg-[#fcab64]">
              Our passion lies in working closely with our clients to develop
              valuable digital marketing tailored to their needs.
            </div>
          </div>
        </div>

        <div className="page3-right">
          <button className="aboutus">About Us</button>
          <div className="stable-des">
            Coltfox is not your typical digital marketing agency. We’re a
            strategic marketing firm that partners with clients to move their
            business forward. We’re bold. We’re curious. We’re transparent.
          </div>
          <div className="movable-des">
            <div className="movable" ref={movableRef}>
              {contents[contentIndex]}
            </div>
          </div>
          <div className="flex justify-center pt-8 me-20">
            <img src={image[contentIndex]} alt="Line Design" />
          </div>
          <button className="findmore-btn">
            Find out more
            <img src="./arr-b.png" className="page3-arr" alt="Arrow" />
          </button>
        </div>
      </div>

      {/*page4*/}
      <div className="page4-container">
        <div className="page4-left">
          <button className="whatwedo-btn">What We Do</button>
          <div className="page4-title">Our Services</div>
          <div className="page4-des">
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
              onClick={() => handleServiceClick("Omni - channel Marketing")}
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
        <div className="page4-right">
          <div className="changing-desof">
            <div className="innertitl flex -gap-5 justify-start">
              {selectedService}
              <img src="./arr-w-learn.png" className="p-3" />
            </div>
            {selectedService === "Performance Marketing" && (
              <div className="titldes">
                ROIs are at the heart of performance marketing, as every action
                can be tracked and measured against key performance indicators
                (KPIs). Whether it be the number of clicks, page views or sales,
                these key metrics are crucial to measuring and enhancing
                performance
              </div>
            )}
            {selectedService === "Omni - channel Marketing" && (
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
      <div className="page5-container">
        <button className="seeall-btn">
          Case Studies <img src="./arr-w-learn.png" />
        </button>
        <div className="page5-cont" ref={containerRef}>
          <div className="page5-title">
            {selectedBox ? selectedBox.toUpperCase() + "." : ""}
          </div>
          <div className="page5-des">
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
          <button className="viewproj-btn">
            View Project
            <img src="./arr-w-learn.png" />
          </button>
        </div>
        <div className="page5-box">
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
                <div className="box-des">
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
                <div className="box-des">
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
                <div className="box-des">
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
                <div className="box-des">
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
        <div className="page6-cont">
          <div className="protitle">
            1. <div className="innert">Requirements</div>
          </div>
          <div className="prodes">
            Our initial meeting or call will identify your objectives and
            decipher exactly how we can help. This involves some deep digging
            into your company, your competitors, your audience and, most
            importantly, what you want to achieve.
          </div>
        </div>
        <div className="page6-cont">
          <div className="protitle">
            2. <div className="innert">Strategy</div>
          </div>
          <div className="prodes">
            We begin to explore all the possible avenues your business could
            take and we develop a custom strategy to hit your business goals,
            underpinned by a strategic digital plan. This is the step where no
            idea is a bad idea; really anything goes!
          </div>
        </div>
        <div className="page6-cont">
          <div className="protitle">
            3. <div className="innert">Launch</div>
          </div>
          <div className="prodes">
            After refining the concept we execute the final solution, always in
            budget and always on time. We'll be on hand to closely monitor the
            launch and keep you updated We track the project or campaign to
            ensure the results match your objectives.
          </div>
        </div>
        <div className="page6-cont">
          <div className="protitle">
            4. <div className="innert">Enhance</div>
          </div>
          <div className="prodes">
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
          <div className="end-date">Since 2016</div>
        </div>
      </div>
      {/*page7*/}
      <div className="page7-container">
        <button className="whatwefocus-btn">What We Focus</button>
        <div className="page7-title">Industries</div>
        <div className="page7-des">
          Regardless of your operation’s size, collaboration toward a shared
          goal leads to success.
        </div>
        <div className="page7-content">
          <div
            className="section1"
            ref={(ref) => (sectionRefs.current[0] = ref)}
          >
            <div className="section-title">FRANCHISES</div>
            <div className="page7-line" />
            <div className="sec-logo">
              <img src="./sec1-logo.png" alt="hell" />
            </div>
            <div className="sec-des1">
              Not only do we increase B2B leads for franchisors, we also help
              home-town franchisees generate new customers and increase customer
              loyalty.
            </div>
            <button className="learn-m">
              Learn More <img src="./arr-w-learn.png" alt="hello" />
            </button>
          </div>
          <div
            className="section2"
            ref={(ref) => (sectionRefs.current[1] = ref)}
          >
            <div className="section-title">NON-PROFITS</div>
            <div className="page7-line" />
            <div className="sec-logo">
              <img src="./sec2-logo.png" alt="" />
            </div>
            <div className="sec-des2">
              Empowering non-profit organizations to increase engagement,
              loyalty, impact, and donations worldwide is our major focus.
            </div>
            <button className="learn-m">
              Learn More <img src="./arr-w-learn.png" alt="hello" />
            </button>
          </div>
          <div
            className="section3"
            ref={(ref) => (sectionRefs.current[2] = ref)}
          >
            <div className="section-title">E-COMMERCE</div>
            <div className="page7-line" />
            <div className="sec-logo">
              <img src="./sec3-logo.png" alt="" />
            </div>
            <div className="sec-des3">
              We boost online retailers' digital presence, optimize conversion
              rates, and enhance the customer shopping experience for increased
              sales and profitability.
            </div>
            <button className="learn-m">
              Learn More <img src="./arr-w-learn.png" alt="hello" />
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
              <img src="./kf_logo.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./junk_logo.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./sendl_logo.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./sbee_logo.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./cre_logo.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./mfr_logo.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./usaid_logo.png" alt="usaid_logo logo" />
            </div>
          </div>
          <div className="scroll1-grp1">
            <div className="elem1">
              <img src="./kf_logo.png" alt="kf_logo logo" />
            </div>
            <div className="elem1">
              <img src="./junk_logo.png" alt="junk_logo logo" />
            </div>
            <div className="elem1">
              <img src="./sendl_logo.png" alt="sendl_logo logo" />
            </div>
            <div className="elem1">
              <img src="./sbee_logo.png" alt="sbee_logo logo" />
            </div>
            <div className="elem1">
              <img src="./cre_logo.png" alt="cre_logo logo" />
            </div>
            <div className="elem1">
              <img src="./mfr_logo.png" alt="mfr_logo logo" />
            </div>
            <div className="elem1">
              <img src="./usaid_logo.png" alt="usaid_logo logo" />
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
      {/*page9*/}
      <div className="page9-container">
        <div className="page9-cont">
          <div className="page9-right ml-[110px]" ref={containerRef1}>
            <div className="page9-title">Its all about our clients. </div>
            <div className="page9-subtitle">(and what they say!)</div>
          </div>
          <div className="page9-des">
            <Slider {...settings}>
              <div className="mx-auto gap-30 flex flex-col">
                <div className="comp-name">Roatan Real Estate</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  Coltfox is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of all your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do. - Marci Wiersma{" "}
                </div>
              </div>
              <div className="mx-auto gap-20 flex flex-col">
                <div className="comp-name">Sterling Protective</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  We re-did our website twice in a 12 month period. There was no
                  comparison between the first company and Coltfox.
                  Professional, Creative, Attentive to Detail, Excellent
                  Communication…If I had contracted with Thrive the first time I
                  would not have had to do it twice. - Mohan Das
                </div>
              </div>
              <div className="mx-auto gap-20 flex flex-col">
                <div className="comp-name">Gibbs Inc</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  Coltfox has been instrumental in helping us build an
                  incredible lead generating machine through our AdWords and
                  remarketing campaigns. Working with Azrael is a pleasure; with
                  his guidance we have seen an increase in lead flow, tremendous
                  efficiency and a very solid ROI.. - Vaneesa
                </div>
              </div>
              <div className="mx-auto gap-20 flex flex-col">
                <div className="comp-name">JEF Techno</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  Coltfox has been instrumental in providing excellence in
                  digital marketing. We are continuously impressed with their
                  level of service and consider them a key marketing partner in
                  helping drive our business. They are not only proactive and
                  responsive, but also at the forefront marketing space - BG
                  Prashanth
                </div>
              </div>
              <div className="mx-auto gap-20 flex flex-col">
                <div className="comp-name">D-Capital Inc</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  We enjoyed working with coltfox on our new website. The team
                  had lots of ideas to make the website look great, as well as
                  practical advice to ensure the site is both user-friendly and
                  SEO-friendly. Everyone is delighted with the end result. -
                  Sindu Umadevan
                </div>
              </div>
              <div className="mx-auto gap-20 flex flex-col">
                <div className="comp-name">Lakshmi Corporation</div>
                <div className="sign">“</div>
                <div className="comp-review">
                  We have been working with Coltfox for several years and
                  continue to be impressed with their professionalism. We work
                  closely with the Coltfox team to meet our goals and
                  objectives, and each year we are able to generate 40% of our
                  leads through Google.- Kishor Kumar Swamy
                </div>
              </div>
            </Slider>
            {/* <div className="comp-name">Roatan Real Estate</div>
            <div className="sign">“</div>
            <div className="comp-review">Coltfox is a much needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of all your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do. - Marci Wiersma </div> */}
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

        <div className="page10-cont">
          <div className="page10-blog1">
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
            <div className="blog-des">
              <div className="para">
                First - party data in marketing - what you need to know ?
              </div>
              <button className="gotoblog-btn">
                <img src="./crossarrimg.png" />
              </button>
            </div>
            <div className="blog-btn">DATA AND ANALYTICS</div>
          </div>
          <div className="page10-blog2">
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
            <div className="blog-des">
              <div className="para">
                The power of performance creative in modern marketing
              </div>
              <button className="gotoblog-btn">
                <img src="./crossarrimg.png" />
              </button>
            </div>
            <div className="blog-btn" style={{ width: "310px" }}>
              STRAREGY AND CREATIVE
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
