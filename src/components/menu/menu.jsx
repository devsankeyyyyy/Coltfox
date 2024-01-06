import gsap from "gsap";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import * as THREE from "three";
import "./menu.css";
import { motion, useAnimation } from "framer-motion";
const NavbarAndFullscreenMenu = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleMenuClick = () => {
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    fullscreenMenu.style.display = "flex";

    const yellowDiv = document.getElementById("yellowDiv");
    const redDiv = document.getElementById("redDiv");

    gsap.to(redDiv, {
      x: 0,
      duration: 0.4,
    });

    gsap.to(yellowDiv, {
      x: -400,
      duration: 0.6,
      delay: 0.3,
    });
  };

  const handlemenu2 = () => {
    const fullscreenMenu2 = document.getElementById("fullscreen-menu2");
    fullscreenMenu2.style.display = "flex";

    const whatwedo = document.getElementById("whatwedo");

    gsap.to(whatwedo, {
      x: 0,
      duration: 0.4,
    });
  };

  const handlemenu3 = () => {
    const fullscreenMenu3 = document.getElementById("fullscreen-menu3");
    fullscreenMenu3.style.display = "flex";

    const whoweare = document.getElementById("whoweare");

    gsap.to(whoweare, {
      x: 0,
      duration: 0.4,
    });
  };

  useEffect(() => {
    const closeButton3 = document.getElementById("close-menu3");

    closeButton3.addEventListener("click", () => {
      const fullscreenMenu3 = document.getElementById("fullscreen-menu3");
      const whoweare = document.getElementById("whoweare");

      gsap.to(whoweare, {
        x: "400px",
        duration: 0.3,
      });

      fullscreenMenu3.style.display = "none";

    });
  }, []);

  useEffect(() => {
    const closeButton2 = document.getElementById("close-menu2");

    closeButton2.addEventListener("click", () => {
      const fullscreenMenu2 = document.getElementById("fullscreen-menu2");
      const whatwedo = document.getElementById("whatwedo");

      gsap.to(whatwedo, {
        x: "400px",
        duration: 0.3,
      });

      fullscreenMenu2.style.display = "none";

    });
  }, []);

  useEffect(() => {
    const menuButton = document.querySelector(".menuButton");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const closeButton = document.getElementById("close-menu");
    menuButton.addEventListener("click", handleMenuClick);

    closeButton.addEventListener("click", () => {
      const yellowDiv = document.getElementById("yellowDiv");
      const redDiv = document.getElementById("redDiv");

      gsap.to(yellowDiv, {
        x: "400px",
        duration: 0.3,
      });

      gsap.to(redDiv, {
        x: "400px",
        duration: 0.3,
      });

      fullscreenMenu.style.display = "none";

      initExperience();
    });
  }, []);

  function initExperience() {
    //------------------------- Variables
    //Particles configuration
    const debug = {
      //Fingerprint
      fingerprintBaseColor1: "#fe7272",
      fingerprintBaseColor2: "#ffffff",
      fingerprintBaseColor3: "#DB1F1E",
      fingerprintWidth: 16,
      fingerprintHeight: 10,
      fingerprintResolution: 70,
      fingerprintParticlesSize: 70,
      fingerprintparticlesRandomOffset: 0.3,

      //Random particles
      ranodmCount: 500,
      randomSize: 20,
      randomParticlesDepth: 50,
    };

    let experienceStarted = false;

    let randomColors = null;

    let fingerprintParticlesMaterial = null;
    let fingerprintParticlesGeometry = null;
    let fingerprintParticles = null;

    let fingerprintParticlesBackMaterial = null;
    let fingerprintParticlesBack = null;

    let randomParticlesGeometry = null;
    let randomParticlesMaterial = null;
    let randomParticles = null;
    let randomPositions = null;
    let scrollVelocity = null;

    // let countQrCodes = 400;
    // const qrCodeGeometry = new THREE.PlaneGeometry(0.5, 0.5);
    // let qrCodesArray = [];
    // let qrCodeMaterial = null;
    // let qrCodesGroup = new THREE.Group();

    let texts = null;

    // let currentIntersect = false;
    let mouseIntersects = null;
    let isObjectSelected = false;
    let qrCodeSelected = null;

    //-------------------------------- Utils ----------------------------------------------------------
    //Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    //Resize

    window.addEventListener("resize", () => {
      //Update Sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      //Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      //Update Renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      //Update Material
      fingerprintParticlesMaterial.uniforms.uPixelRatio.value = Math.min(
        window.devicePixelRatio,
        2
      );
      randomParticlesMaterial.uniforms.uPixelRatio.value = Math.min(
        window.devicePixelRatio,
        2
      );

      //Scroll speed update
      if (sizes.width > 700) {
        scrollVelocity = 0.12;
        scrollContainer.style.height = "260px";
      } else {
        scrollVelocity = 0.075;
        scrollContainer.style.height = "40500px";
      }
    });

    //------------------------------ Loaders --------------------------------------------------

    const loadingManager = new THREE.LoadingManager();
    const textureLoader = new THREE.TextureLoader(loadingManager);

    loadingManager.onLoad = () => {
      loaded();
    };

    //Fingerprint
    const fingerprintTexture = textureLoader.load("/textures/fingerprint2.jpg");

    //QrCodes
    //` const qrCodesTextures = [];
    //Function will fill QrCodesTextures array wich will be used to generate each QrCode with random textures
    // for (let i = 0; i < (qrCodes.length > countQrCodes ? countQrCodes : qrCodes.length); i++) {
    //   const texture = textureLoader.load(qrCodes[i].image)
    //   texture.generateMipmaps = false;
    //   texture.magFilter = THREE.NearestFilter;
    //   texture.minFilter = THREE.NearestFilter;
    //   qrCodesTextures.push(texture)
    // }

    //--------------------------------------------- Setup ----------------------------

    //Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(new THREE.Color("#000000"), 1, 40);

    //Camera
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);

    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.01,
      50
    );
    camera.position.set(0, 0, 0.71);
    cameraGroup.add(camera);

    //Renderer
    const canvas = document.querySelector(".experience2");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });

    renderer.setClearAlpha = 0;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(sizes.width, sizes.height);

    //---------------------------------------------- Overlay------------------------------

    const scrollContainer = document.querySelector(".scrollable-container");

    const loaded = () => {
      setTimeout(() => {
        experienceStarted = true;
      }, 500);
      if (sizes.width > 700) {
        scrollVelocity = 0.12;
        scrollContainer.style.height = "26000px";
      } else {
        scrollVelocity = 0.075;
        scrollContainer.style.height = "40500px";
      }
    };

    // generate.addEventListener('pointerdown',()=> {
    //     window.scrollTo(0, sizes.width > 21700 ? 35300 : 18400);
    // })

    window.onload = function () {
      window.scrollTo(0, sizes.width > 700 ? 3 : 8400);
    };

    //-------------------------------------------- Creating elements ---------------------------

    createFingerprint();
    // fingerprintParticles.visible = false;
    createRandomParticles();
    // randomParticles.visible = false;
    // createQrCodes();

    createText();

    //-------------------------------------------- Ray caster & Qr Interaction ---------------------
    // const raycaster = new THREE.Raycaster();

    // const qrCodeInfo = document.querySelector('.QrCodeInfo')
    // const qrCodePrompt = document.getElementById('QrCodeInfo__prompt')
    // let qrCodesPreviousColor = null;

    // const qrCodeOnClick = (event) => {
    //   const clickCoord = new THREE.Vector2(
    //     (event.clientX / sizes.width - 0.5) * 2,
    //     -(event.clientY / sizes.height - 0.5) * 2,
    //   )

    //   raycaster.setFromCamera(clickCoord, camera);
    //   mouseIntersects = raycaster.intersectObjects(qrCodesArray);

    //   if (mouseIntersects.length > 0 && mouseIntersects[0].distance < 35 && !isObjectSelected) {
    //     qrCodeSelected = mouseIntersects[0].object;
    //     qrCodeSelected.isSelected = true;
    //     isObjectSelected = true;
    //     const i = qrCodesArray.indexOf(qrCodeSelected);

    //     qrCodeInfo.classList.add('QrCodeInfo--active')
    //     qrCodePrompt.textContent = qrCodes[qrCodeSelected.index].prompt;

    //     qrCodeToCero();

    //   } else if (isObjectSelected) {
    //     qrCodeInfo.classList.remove('QrCodeInfo--active')
    //     qrCodeToPrevious();
    //   }
    // }
    //window.addEventListener('pointerdown', qrCodeOnClick);

    // function qrCodeToCero() {
    //   gsap.to(qrCodeSelected.position, { duration: 0.5, delay: 0, x: 0 });
    //   gsap.to(qrCodeSelected.position, { duration: 0.5, delay: 0, y: 0 });
    //   gsap.to(qrCodeSelected.position, { duration: 0.5, delay: 0, z: -2.5 - qrCodesGroup.position.z });

    //   gsap.to(qrCodeSelected.rotation, { duration: 0.5, delay: 0, x: 0 })
    //   gsap.to(qrCodeSelected.rotation, { duration: 0.5, delay: 0, y: 3.14159 })
    //   gsap.to(qrCodeSelected.rotation, { duration: 0.5, delay: 0, z: 0 })

    //   gsap.to(cameraGroup.position, { duration: 0.5, delay: 0, x: 0 });
    //   gsap.to(cameraGroup.position, { duration: 0.5, delay: 0, y: 0 });

    //   qrCodesPreviousColor = { r: qrCodeSelected.material.color.r, g: qrCodeSelected.material.color.g, b: qrCodeSelected.material.color.b };
    //   gsap.to(qrCodeSelected.material.color, { duration: 0.5, delay: 0, r: 1 })
    //   gsap.to(qrCodeSelected.material.color, { duration: 0.5, delay: 0, g: 1 })
    //   gsap.to(qrCodeSelected.material.color, { duration: 0.5, delay: 0, b: 1 })
    // }

    //-------------------------------------------- Animation ----------------------------------

    //Scroll event
    let timeLine = { t: 0 };
    // window.addEventListener('scroll', (event) => {
    //     gsap.to(timeLine, { duration: 1, delay: 0, t: scrollY * scrollVelocity });
    //     if (isObjectSelected) {
    //         qrCodeToPrevious();
    //     }

    // })

    //Animate
    const cursor = new THREE.Vector2();
    window.addEventListener("mousemove", (event) => {
      cursor.x = (event.clientX / sizes.width - 0.5) * 2;
      cursor.y = -(event.clientY / sizes.height - 0.5) * 2;
    });

    const clock = new THREE.Clock();
    let previousTime = 0;

    const tick = () => {
      // stats.begin()

      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      //Animating Particles Position

      // if(timeLine.t > 400){
      //     randomParticles.position.z = (timeLine.t - 400)*0.25;
      // }

      //Animating buttons
      // const timeStart = 400
      // const timeEnds = 600
      // const buttonPercentage = Math.max(0, Math.min(1, (timeLine.t - timeStart) / (timeEnds - timeStart))) * 100;
      //buttonGenerateThenActive.style.clipPath = `polygon(${buttonPercentage}% 0, ${buttonPercentage}% 100%, 0 100%, 0 0)`;

      //Parallax Effect
      const parallaxX = cursor.x * 0.5;
      const parallaxY = cursor.y * 0.5;

      if (!isObjectSelected) {
        cameraGroup.position.x +=
          (parallaxX - cameraGroup.position.x) * 2 * deltaTime;
        cameraGroup.position.y +=
          (parallaxY - cameraGroup.position.y) * 2 * deltaTime;
      }

      for (const text of texts) {
        //Animating position
        text.position.z =
          Math.pow(timeLine.t * text.speed - text.appearTime, text.staticTime) -
          text.distance;

        //Adding perspective
        const scale = -1.0 * (1.0 / text.position.z);
        if (text.position.z < -0.01 && text.position.z > -40) {
          text.element.style.display = "flex";
          text.element.style.scale = scale;
        } else {
          text.element.style.display = "none";
        }
      }

      //Update materials
      fingerprintParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;

      fingerprintParticlesBackMaterial.uniforms.uTimeLine.value = timeLine.t;

      randomParticlesMaterial.uniforms.uTime.value = elapsedTime;
      randomParticlesMaterial.uniforms.uTimeLine.value = timeLine.t;

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
      // stats.end()
    };

    tick();

    //---------------------------------------- Functions ------------------------------

    function createFingerprint() {
      //Errase last fingertip
      if (fingerprintParticles) {
        fingerprintParticlesGeometry.dispose();
        fingerprintParticlesMaterial.dispose();
        scene.remove(fingerprintParticles);
      }

      //Options
      const width = debug.fingerprintWidth;
      const height = debug.fingerprintHeight;
      const resolution = debug.fingerprintResolution;
      const size = debug.fingerprintParticlesSize;
      const randomOffset = debug.fingerprintparticlesRandomOffset;
      const colors = [
        debug.fingerprintBaseColor1,
        debug.fingerprintBaseColor2,
        debug.fingerprintBaseColor3,
      ];

      //Geometry
      fingerprintParticlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(resolution * resolution * 3);
      const randomValues = new Float32Array(resolution * resolution);
      randomColors = new Float32Array(resolution * resolution * 3);

      let v = 0;
      for (let i = 0; i < positions.length; i++) {
        const x = i * 3 + 0;
        const y = i * 3 + 1;
        const z = i * 3 + 2;

        //Position
        for (let h = 0; h < resolution; h++) {
          positions[v * 3 + 0] =
            i * (width / resolution) + Math.random() * randomOffset;
          positions[v * 3 + 1] =
            h * (height / resolution) + Math.random() * randomOffset;
          v++;
        }

        //Colors
        const baseColor = new THREE.Color(
          colors[Math.floor(Math.random() * 3)]
        );

        baseColor.getHSL(baseColor, THREE.SRGBColorSpace);
        const h = baseColor.h;

        let l = 0;
        l = (Math.random() - 0.5) * 0.2 + baseColor.l;

        const finalColor = new THREE.Color().setHSL(
          baseColor.h,
          baseColor.s,
          l
        );
        randomColors[x] = finalColor.r;
        randomColors[y] = finalColor.g;
        randomColors[z] = finalColor.b;

        //Randomnes
        randomValues[i] = Math.random();
      }

      fingerprintParticlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      fingerprintParticlesGeometry.setAttribute(
        "aRandomColors",
        new THREE.BufferAttribute(randomColors, 3)
      );
      fingerprintParticlesGeometry.setAttribute(
        "aRandom",
        new THREE.BufferAttribute(randomValues, 1)
      );
      fingerprintParticlesGeometry.center();

      //Material
      fingerprintParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: `
                attribute vec3 aRandomColors;
                attribute float aRandom;

                uniform sampler2D uTexture;
                uniform float uWidth;
                uniform float uHeight;
                uniform float uPointSize;
                uniform float uPixelRatio;
                uniform float uTime;
                uniform float uTimeLine;

                varying vec3 vRandomColor;
                varying vec4 vPointColor;


                void main (){
                    vec3 vertexPosition = position;

                    //Create animation
                    float originalPosition = position.z;
                    float randomDistance = aRandom*2.0;
                    float frameOrigin = 300.0;
                    float newTimeLine = abs(uTimeLine-frameOrigin)*-1.0+frameOrigin;
                    // float newTimeLine = (pow((uTimeLine-frameOrigin)*0.1, 3.0)*+100.0);
                    float x = newTimeLine*0.5; //-5.0 used to make the values of x can go bellow 0

                    //Aplicando randomicidad a los vertices (posicion inicial)
                    vertexPosition.z += randomDistance*50.0+40.0;


                    vertexPosition.z -= x;
                    vertexPosition.z = clamp(vertexPosition.z, originalPosition, 1000.0);
                    vertexPosition.z += uTimeLine*0.05;
                    // vertexPosition.z += 50.0;


                    vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;

                    gl_Position = projectedPosition;

                    //PointSize
                    gl_PointSize = uPointSize;

                    //Perspective & pixelRatio fix
                    gl_PointSize *= clamp(1.0/ -viewPosition.z, 0.0, 0.25);
                    gl_PointSize *= uPixelRatio;



                    //Varyings
                    vRandomColor = aRandomColors;

                    vec2 vertexUv = vec2(vertexPosition.x/uWidth, vertexPosition.y/uHeight);
                    vertexUv.x += 0.5;
                    vertexUv.y += 0.5;

                    vPointColor = texture2D(uTexture, vertexUv); 
                    vPointColor -= vec4(step(vPointColor.r, 0.5));
                }`,
        fragmentShader: `
                varying vec3 vRandomColor;
                varying vec4 vPointColor;


                void main (){

                    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                    float strength = 0.05 / distanceToCenter - 0.1;

                    gl_FragColor = vec4(vRandomColor.r * strength, vRandomColor.g * strength, vRandomColor.b* strength, strength );


                    vec4 color = vec4(vRandomColor.r*vPointColor.r, vRandomColor.g*vPointColor.g, vRandomColor.b*vPointColor.b, vPointColor.a);

                    vec4 colorGlowPoint = vec4(color.r * strength, color.g * strength, color.b * strength, color.a * strength);

                    gl_FragColor = vec4(color);

                    // if(gl_FragColor.r < 0.1){
                    //     discard;
                    // }


                }
                `,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uPointSize: { value: size },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uTexture: { value: fingerprintTexture },
          uWidth: { value: width },
          uHeight: { value: height },
          uTime: { value: 0 },
          uTimeLine: { value: 0 },
        },
      });

      //Particles
      fingerprintParticles = new THREE.Points(
        fingerprintParticlesGeometry,
        fingerprintParticlesMaterial
      );
      fingerprintParticles.position.z = -40;

      scene.add(fingerprintParticles);

      fingerprintParticlesBackMaterial = new THREE.ShaderMaterial({
        vertexShader: `
              attribute vec3 aRandomColors;
              attribute float aRandom;

              uniform sampler2D uTexture;
              uniform float uWidth;
              uniform float uHeight;
              uniform float uPointSize;
              uniform float uPixelRatio;
              uniform float uTime;
              uniform float uTimeLine;

              varying vec3 vRandomColor;
              varying vec4 vPointColor;


              void main (){
                  vec3 vertexPosition = position;

                  //Create animation
                  float originalPosition = position.z;
                  float randomDistance = aRandom*2.0;
                  float frameOrigin = 350.0;
                  float newTimeLine = abs(uTimeLine-frameOrigin)*-1.0+frameOrigin;
                  // float newTimeLine = (pow((uTimeLine-frameOrigin)*0.1, 3.0)*+100.0);
                  float x = newTimeLine*0.5; //-5.0 used to make the values of x can go bellow 0

                  //Aplicando randomicidad a los vertices (posicion inicial)
                  vertexPosition.z += randomDistance*50.0+40.0;


                  vertexPosition.z -= x;
                  vertexPosition.z = clamp(vertexPosition.z, originalPosition, 1000.0);
                  vertexPosition.z -= uTimeLine*0.05;
                  // vertexPosition.z += 50.0;


                  vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
                  vec4 viewPosition = viewMatrix * modelPosition;
                  vec4 projectedPosition = projectionMatrix * viewPosition;

                  gl_Position = projectedPosition;

                  //PointSize
                  gl_PointSize = uPointSize;

                  //Perspective & pixelRatio fix
                  gl_PointSize *= clamp(1.0/ -viewPosition.z, 0.0, 0.25);
                  gl_PointSize *= uPixelRatio;



                  //Varyings
                  vRandomColor = aRandomColors;

                  vec2 vertexUv = vec2((vertexPosition.x*-1.0)/uWidth, vertexPosition.y/uHeight);
                  vertexUv.x += 0.5;
                  vertexUv.y += 0.5;

                  vPointColor = texture2D(uTexture, vertexUv); 
                  vPointColor -= vec4(step(vPointColor.r, 0.5));
              }`,
        fragmentShader: `
              varying vec3 vRandomColor;
              varying vec4 vPointColor;


              void main (){

                  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                  float strength = 0.05 / distanceToCenter - 0.1;

                  gl_FragColor = vec4(vRandomColor.r * strength, vRandomColor.g * strength, vRandomColor.b* strength, strength );


                  vec4 color = vec4(vRandomColor.r*vPointColor.r, vRandomColor.g*vPointColor.g, vRandomColor.b*vPointColor.b, vPointColor.a);

                  vec4 colorGlowPoint = vec4(color.r * strength, color.g * strength, color.b * strength, color.a * strength);

                  gl_FragColor = vec4(color);

                  // if(gl_FragColor.r < 0.1){
                  //     discard;
                  // }


              }
              `,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uPointSize: { value: size },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uTexture: { value: fingerprintTexture },
          uWidth: { value: width },
          uHeight: { value: height },
          uTime: { value: 0 },
          uTimeLine: { value: 0 },
        },
      });

      fingerprintParticlesBack = fingerprintParticles.clone();
      fingerprintParticlesBack.material = fingerprintParticlesBackMaterial;
      fingerprintParticlesBack.rotation.y = Math.PI;
      scene.add(fingerprintParticlesBack);
    }

    function createRandomParticles() {
      if (randomParticles) {
        scene.remove(randomParticles);
        randomParticlesGeometry.dispose();
        randomParticlesMaterial.dispose();
      }
      //Options
      const count = debug.ranodmCount;
      const size = debug.randomSize;
      const width = debug.fingerprintWidth;
      const height = debug.fingerprintHeight;
      const depth = debug.randomParticlesDepth;

      //Geometry
      randomParticlesGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        const phi = Math.random() * Math.PI * 2; // Ángulo alrededor del eje Y (0 a 2π)
        const costheta = Math.random() * 2 - 1; // Valor entre -1 y 1
        const u = Math.random(); // Valor entre 0 y 1
        const theta = Math.acos(costheta); // Ángulo respecto al eje Y (0 a π)
        const r = (height / 2) * Math.cbrt(u); // Aplicamos la distancia radial para distribuir las partículas uniformemente en el volumen de la esfera

        // Coordenadas cartesianas
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);

        positions[i * 3 + 0] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = (Math.random() - 1.0) * depth;

        // positions[i*3+0] = (Math.random()-0.5)*width;
        // positions[i*3+1] = (Math.random()-0.5)*height;
        // positions[i*3+2] = (Math.random()-1.0)*depth;
      }
      randomPositions = positions;

      randomParticlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      randomParticlesGeometry.setAttribute(
        "aRandomColors",
        new THREE.BufferAttribute(randomColors, 3)
      );

      //Material
      randomParticlesMaterial = new THREE.ShaderMaterial({
        vertexShader: `
                attribute vec3 aRandomColors;

                uniform float uPointSize;
                uniform float uPixelRatio;
                uniform float uTime;
                uniform float uTimeLine;
                uniform float uDepth;

                varying vec3 vRandomColor;

                //Model matrix
                //View Matrix
                //Projection matrix 


                void main (){
                    vec3 vertexPosition = position;

                    //Modified the wich change direction at time line value 300
                    float timeLine = -abs(uTimeLine-400.0);
                    float t = -(timeLine-uTime)*0.005;
                    t += distance(vertexPosition.z, 0.0);

                    //Particles go backwards when arrived to 0
                    vertexPosition.z = (t - floor((t+1.0)))*uDepth;


                    vec4 modelPosition = modelMatrix * vec4(vertexPosition, 1.0);
                    vec4 viewPosition = viewMatrix * modelPosition;
                    vec4 projectedPosition = projectionMatrix * viewPosition;

                    gl_Position = projectedPosition;

                    //PointSize
                    gl_PointSize = uPointSize;

                    //Perspective & pixelRatio fix
                    gl_PointSize *= (1.0/ -viewPosition.z);
                    gl_PointSize *= uPixelRatio;

                    //Varyings
                    vRandomColor = aRandomColors;


                }
            `,
        fragmentShader: `
                varying vec3 vRandomColor;


                void main (){

                    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
                    float strength = 0.05 / distanceToCenter - 0.5;
                    vec4 colorGlowPoint = vec4(vRandomColor.r*strength, vRandomColor.g*strength, vRandomColor.b*strength, strength);

                    // gl_FragColor = colorGlowPoint;



                    gl_FragColor = vec4(vRandomColor, 1.0);



                }
            `,
        depthWrite: false,
        transparent: true,
        uniforms: {
          uPointSize: { value: size },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
          uTime: { value: 0 },
          uTimeLine: { value: 0 },
          uDepth: { value: depth },
        },
      });

      // randomParticles = new THREE.Points(randomParticlesGeometry, randomParticlesMaterial);
      // scene.add(randomParticles);
    }
    // function createQrCodes() {
    //   const colors = [new THREE.Color(debug.fingerprintBaseColor1), new THREE.Color(debug.fingerprintBaseColor2), new THREE.Color(debug.fingerprintBaseColor3)];

    //   colors[0].getHSL(colors[0], THREE.LinearSRGBColorSpace);
    //   colors[1].getHSL(colors[1], THREE.LinearSRGBColorSpace);
    //   colors[2].getHSL(colors[2], THREE.LinearSRGBColorSpace);

    //   colors[0].setHSL(colors[0].h, colors[0].s, 0.1);
    //   colors[1].setHSL(colors[1].h, colors[1].s, 1);
    //   colors[2].setHSL(colors[2].h, colors[2].s, 0.1);
    //   console.log(colors);

    //   // console.log(getHSL(colors[0]));

    //   //Will create the Qr Codes
    //   for (let i = 0; i < countQrCodes; i++) {
    //     let randomImage = 0;

    //     //This takes all the textures that where loaded, once they all used,then will start tu use random textures from the same qrCodesTextures array
    //     if (i <= qrCodesTextures.length) {
    //       randomImage = i;
    //     } else {
    //       randomImage = Math.floor(Math.random() * qrCodesTextures.length)
    //     }

    //     qrCodeMaterial = new THREE.MeshBasicMaterial({
    //       side: THREE.DoubleSide,
    //       map: qrCodesTextures[randomImage],
    //       color: colors[Math.floor(Math.random() * 3)],
    //     });

    //     const qrCodeMesh = new THREE.Mesh(qrCodeGeometry, qrCodeMaterial)
    //     qrCodeMesh.position.x = randomPositions[i * 3 + 0] / 2
    //     qrCodeMesh.position.y = randomPositions[i * 3 + 1] / 2
    //     qrCodeMesh.position.z = randomPositions[i * 3 + 2] * 12;
    //     qrCodeMesh.isSelected = false;
    //     qrCodeMesh.index = randomImage;

    //     qrCodesGroup.add(qrCodeMesh);
    //     qrCodesArray.push(qrCodeMesh);
    //   }
    //   scene.add(qrCodesGroup);
    // }

    function createText() {
      texts = [
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".text-0"),
          appearTime: 0,
          speed: 0.03,
          distance: 1,
          staticTime: 5,
        },
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".text-1"),
          appearTime: 2.5,
          speed: 0.03,
          distance: 1,
          staticTime: 5,
        },
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".text-2"),
          appearTime: 5,
          speed: 0.03,
          distance: 1,
          staticTime: 5,
        },
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".text-3"),
          appearTime: 7.5,
          speed: 0.03,
          distance: 1,
          staticTime: 5,
        },
        {
          position: new THREE.Vector3(0, 0, 0),
          element: document.querySelector(".text-4"),
          appearTime: 3.75,
          speed: 0.008,
          distance: 1,
          staticTime: 13,
        },
      ];
    }
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoExtended, setIsLogoExtended] = useState(false);
  const [isLogo, setIsLogo] = useState(false);
  const [slider, setslider] = useState(false);

  const controls = useAnimation();

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen && isLogoExtended && isLogo) {
      setIsLogoExtended(false);
      controls.start({ scale: 1 });
      setIsLogo(false);
    }
  };

  const handleLogoClick = () => {
    if (!isMenuOpen && !isLogo) {
      setIsLogoExtended(!isLogoExtended);
    }
  };
  const handleLogo = () => {
    if (!isMenuOpen && !isLogoExtended) {
      setIsLogo(!isLogo);
      setslider(true);
    }
  };
  const variants = {
    hamburger: { rotate: 0, opacity: 1 },
    cross: { rotate: 180, opacity: 1 },
  };

  return (
    <div className="flex h-32">
      <nav className={`navbar ${show ? 'active-menu' : ''}`}>
        <Link to={"/"}>
          <div
            className={`logo ${isLogo ? "" : ""} ${
              isLogoExtended ? "extended " : ""
            }`}
            onClick={handleLogoClick}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.img
              className={`logo-img ${isLogoExtended ? "extended" : ""}`}
              src={isLogoExtended ? "./expandedlogo.png" : "./logo.png"}
              alt="Company Logo"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: isLogoExtended ? 1.2 : 0,
              }}
            />
            <div className="container">
              <div className="circle1 grow"></div>
            </div>
            <div className="container">
              <div className="circle1 shrink"></div>
            </div>
            <div className="container">
              <div className="circle1 grow-to-bottom-right"></div>
            </div>
            <div className="container">
              <div className="circle1 grow-shrink-to-upper-right"></div>
            </div>
          </div>
        </Link>
        <div className="menuButton rotate-90 mr-5 font-black">
          <FaBars className="text-red-400 text-3xl " />
        </div>
      </nav>

      <div id="fullscreen-menu">
        <div
          id="redDiv"
          className="vertical-div  z-[10000] pt-4 flex flex-col justify-evenly items-center red"
        >
          <h1 className="text-5xl font-black text-white">Home</h1>
          <ul>
                        {/* <li className='pb-4 text-2xl text-white'><Link to='/about-us'>About Us</Link></li> */}
                        <li onClick={handlemenu3} className='whoweare-menu cursor-pointer pb-4 text-2xl text-white text-center'>Who we are</li>
                        <li onClick={handlemenu2} className='whatwedo-menu cursor-pointer pb-4 text-2xl text-white text-center'>What we do</li>
                        <li className='pb-4 text-2xl text-white text-center'><Link to='/fox-impact'>What we did</Link></li>
                        <li className='pb-4 text-2xl text-white text-center'><Link to='/industries'>What we charge</Link></li>
                        <li className='pb-4 text-2xl text-white text-center'><Link to='/our-blogs'>What we read</Link></li>
                        <li className='pb-4 text-2xl text-white text-center'><Link to='/contact'>Where we are</Link></li>
                        <li className='pb-4 text-2xl text-white text-center'><Link to='/who'>Who we hire</Link></li>
          </ul>
          <div className="flex text-white relative gap-8 px-10">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.6906 0.0503525C15.9094 0.328899 16.7016 1.68414 16.4578 3.07687L16.35 3.68753C16.1016 5.11776 15.6422 6.47835 15 7.71574L21.75 7.71574C22.9922 7.71574 24 8.86742 24 10.2869C24 11.2779 23.5078 12.1403 22.7859 12.5689C23.2969 13.0403 23.625 13.7634 23.625 14.5723C23.625 15.8257 22.8375 16.8703 21.8016 17.0953C22.0078 17.4863 22.125 17.9416 22.125 18.4291C22.125 19.57 21.4734 20.5396 20.5734 20.8717C20.6062 21.0485 20.625 21.236 20.625 21.4288C20.625 22.8483 19.6172 24 18.375 24H13.8047C12.9141 24 12.0469 23.7 11.3062 23.1376L9.50156 21.7609C8.25 20.8074 7.5 19.2004 7.5 17.4809L7.5 11.5243C7.5 9.96018 8.12344 8.4871 9.1875 7.50683L9.53437 7.19079C10.7766 6.05517 11.625 4.45889 11.9344 2.68047L12.0422 2.06981C12.2859 0.677082 13.4719 -0.228194 14.6906 0.0503525ZM1.5 8.57281H4.5C5.32969 8.57281 6 9.33881 6 10.2869L6 22.2859C6 23.234 5.32969 24 4.5 24H1.5C0.670312 24 0 23.234 0 22.2859L0 10.2869C0 9.33881 0.670312 8.57281 1.5 8.57281Z"
                  fill="white"
                  fill-opacity="0.8"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg">Fb</p>
            </div>
            <div>
              <p className="text-lg">Li</p>
            </div>
            <div>
              <p className="text-lg">Ig</p>
            </div>
            <div>
              <p className="text-lg">Tw</p>
            </div>
            <div className="absolute  top-10 bottom-0 left-[20%] w-[200px] h-[1.3px] bg-white"></div>
          </div>
          <p className="text-xl capitalize text-white">
            Copyrighted by hudbil 2023
          </p>
        </div>

        <div
          id="yellowDiv"
          className="vertical-div pt-12 2xl:pt-6 hidden gap-2 sm:flex flex-col justify-between xl:justify-evenly
           items-center yellow"
        >
          <h1 className="text-5xl font-black  text-[#b18060]">Our brands</h1>
          <div className="h-fit">
            <div className="overlay absolute inset-0 w-full h-full z-10">
              <img
                className="w-full h-full object-cover opacity-40"
                src="/images/overlay.png"
                alt="Overlay Image"
              />
            </div>
            <div className="logo flex flex-col justify-center items-center text-center relative h-1/5 xl:h-fit w-32">
              <a className="cursor-pointer">
                <img
                  className="w-full h-auto"
                  src="/images/hudbil_logo.png"
                  alt=""
                />
              </a>
              <div className=" w-2/3 mx-auto h-[2px] bg-[#B18060]"></div>
            </div>
            <div className="logo  flex flex-col justify-center items-center text-center relative h-1/5 xl:h-fit w-36">
              <a className="cursor-pointer">
                <img
                  className="w-full h-auto"
                  src="/images/coltfox_logo.png"
                  alt=""
                />
              </a>
              <div className=" w-2/3 mx-auto h-[2px] bg-[#B18060]"></div>
            </div>
            <div className="logo  flex flex-col justify-center items-center text-center relative h-1/5 xl:h-fit w-32">
              <a className="cursor-pointer">
                <img
                  className="w-full h-auto"
                  src="/images/maus_bg_logo.png"
                  alt=""
                />
              </a>
              <div className=" w-2/3 mx-auto h-[2px] bg-[#B18060]"></div>
            </div>
            <div className="logo  flex flex-col justify-center items-center text-center  relative h-1/5 xl:h-fit w-32">
              <a className="cursor-pointer">
                <img
                  className="w-full h-auto"
                  src="/images/maus_logo.png"
                  alt=""
                />
              </a>
              <div className=" w-2/3 mx-auto h-[2px] bg-[#B18060]"></div>
            </div>
          </div>
        </div>

        <button id="close-menu" className="custom-close-button">
          <div className="circle">
            <FiX className="close-icon" />
          </div>
        </button>
        <div className="w-100 mr-auto ml-[15%] mt-auto mb-auto">
          <div className="your-svg-container">
            <svg
              width="319"
              height="449"
              viewBox="0 0 319 449"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="your-svg"
              id="animated-svg"
            >
              <path
                className="svg-four"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M248.931 81.6136C164.121 127.469 122.138 73.5463 41.245 152.52C14.8032 177.799 5.0098 212.288 1.09248 249.521C-1.45378 282.443 1.09225 350.443 2.26753 383.756C6.96831 376.702 5.00967 367.883 11.4733 361.221C17.3492 330.846 56.1307 299.492 85.1188 290.282C113.324 281.267 184.423 275.193 198.525 303.411C204.793 296.749 214.195 299.884 223.988 288.714C233.977 277.348 238.678 259.516 242.595 255.4C213.999 258.34 206.36 267.942 176.001 250.697C150.538 236.392 150.734 226.006 138.199 204.45C127.281 225.484 113.475 236.933 79.1637 232.472C77.9885 214.248 93.9328 196.611 109.406 188.577C131.147 177.211 146.425 185.833 167.382 190.928C201.071 198.963 260.419 191.712 280.593 162.514C287.448 153.303 299.396 129.984 299.788 119.01C289.603 122.733 275.696 141.937 251.605 146.445C267.666 130.18 290.778 117.834 294.695 89.8112C276.872 101.373 273.934 111.171 248.079 117.05C257.677 109.408 279.222 89.8112 280.593 77.2695C277.459 78.2493 256.374 88.7467 248.931 92.0781C238.746 96.7812 223.733 105.368 212.951 108.403C223.733 103.275 239.137 95.331 248.931 81.6136Z"
                fill="url(#paint0_linear_1425_10643)"
              />
              <path
                className="svg-five"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M245.558 84.553C226.768 100.213 225.088 100.459 206.68 111.342C221.323 109.249 234.955 101.813 245.14 97.1103C252.583 93.7789 271.906 82.6027 274.844 81.6229C273.473 94.1646 258.946 110.327 241.295 120.126C271.916 112.598 272.655 106.776 289.069 94.5989C285.152 122.818 252.671 144.41 244.82 149.52C268.912 145.013 283.63 130.178 294.508 123.062C294.116 134.036 282.536 159.254 275.681 168.269C322.297 126.92 334.331 53.694 296.725 0C290.261 20.3802 286.54 31.7461 274.396 49.9707C268.912 58.3971 257.691 74.0885 245.558 84.553Z"
                fill="url(#paint1_linear_1425_10643)"
              />
              <path
                className="svg-three"
                d="M35.0673 427.194C42.1133 427.194 50.4149 436.038 49.1594 449H0.378242C0.378242 449 -0.979276 271.655 1.44948 245.2C3.87824 218.745 14.6356 177.593 35.6526 158.977C25.8564 243.669 107.953 244.039 140.324 201.108C167.901 252.953 192.758 264.1 246.209 253.038C226.834 313.694 168.204 317.706 164.834 317.706C161.465 317.706 60.2718 295.582 36.8288 382.373L35.0673 427.194Z"
                fill="#F22929"
              />
              <mask
                id="mask0_1425_10643"
                className="svg-one"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="158"
                width="247"
                height="291"
              >
                <path
                  d="M35.0672 427.194C42.1133 427.194 50.4149 436.037 49.1594 449H0.378207C0.378207 449 -0.979311 271.655 1.44945 245.2C3.8782 218.745 14.6355 177.593 35.6525 158.977C25.8564 243.669 107.953 244.039 140.324 201.108C167.901 252.953 192.758 264.1 246.209 253.038C226.834 313.694 168.204 317.706 164.834 317.706C161.465 317.706 60.2717 295.582 36.8288 382.373L35.0672 427.194Z"
                  fill="#807F7F"
                />
              </mask>
              <g mask="url(#mask0_1425_10643)" className="svg-one">
                <path
                  d="M-19.8672 391.873C-19.8672 329.157 47.1597 278.215 120.177 278.215C193.194 278.215 252.387 329.056 252.387 391.772V399.812C252.387 462.528 193.194 521.449 120.177 521.449C47.1597 521.449 -17.9085 481.044 -17.9085 418.328L-19.8672 391.873Z"
                  fill="url(#paint2_linear_1425_10643)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1425_10643"
                  x1="223.07"
                  y1="136.791"
                  x2="49.0536"
                  y2="210.267"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCAB64" />
                  <stop offset="0.755208" stopColor="#FD504F" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1425_10643"
                  x1="309.102"
                  y1="15.6771"
                  x2="261.074"
                  y2="129.319"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FCC391" />
                  <stop offset="1" stopColor="#1F1F21" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1425_10643"
                  x1="97.9471"
                  y1="295.299"
                  x2="24.2372"
                  y2="447.624"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F1F21" />
                  <stop offset="1" stopColor="#FCC391" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <canvas className="experience2 w-3.5"></canvas>
      </div>
      <div id="fullscreen-menu2">
                <div id="whatwedo" className="main-menu-div z-[10000] flex flex-col justify-between items-center">
                    <h1 className='ml-auto text-5xl font-bold text-[#DF2323] leading-snug text-right mt-16 mr-10'>What we do</h1>
                    
                    <div className="flex ml-auto sm:mx-32 flex-col sm:flex-row gap-12 sm:gap-0">
                    <div className="menu-1 flex flex-col sm:mr-36 w-2/3"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">01</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Performance Marketing</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">02</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/omni-channel-marketing'>Channel Marketing</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-96 sm:mx-32 flex-col sm:flex-row gap-12 sm:gap-0">
                    <div className="menu-1 flex flex-col sm:mr-36 w-2/3"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">03</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/lead-generation'>Lead Generation</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">04</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/content-marketing'>Content Marketing</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-96 sm:mx-32 flex-col sm:flex-row gap-12 sm:gap-0">
                    <div className="menu-1 flex flex-col sm:mr-36 w-2/3"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">05</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/hudbil-services'>Hudbil Services</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">06</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/kalacode-services'>Kalacode Services</Link></span>
                    </div>
                    </div>

                    <div className="social flex text-white gap-4 ml-auto pl-7 mr-16 mb-2 text-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none">
                                <path d="M14.6906 0.0503525C15.9094 0.328899 16.7016 1.68414 16.4578 3.07687L16.35 3.68753C16.1016 5.11776 15.6422 6.47835 15 7.71574L21.75 7.71574C22.9922 7.71574 24 8.86742 24 10.2869C24 11.2779 23.5078 12.1403 22.7859 12.5689C23.2969 13.0403 23.625 13.7634 23.625 14.5723C23.625 15.8257 22.8375 16.8703 21.8016 17.0953C22.0078 17.4863 22.125 17.9416 22.125 18.4291C22.125 19.57 21.4734 20.5396 20.5734 20.8717C20.6062 21.0485 20.625 21.236 20.625 21.4288C20.625 22.8483 19.6172 24 18.375 24H13.8047C12.9141 24 12.0469 23.7 11.3062 23.1376L9.50156 21.7609C8.25 20.8074 7.5 19.2004 7.5 17.4809L7.5 11.5243C7.5 9.96018 8.12344 8.4871 9.1875 7.50683L9.53437 7.19079C10.7766 6.05517 11.625 4.45889 11.9344 2.68047L12.0422 2.06981C12.2859 0.677082 13.4719 -0.228194 14.6906 0.0503525ZM1.5 8.57281H4.5C5.32969 8.57281 6 9.33881 6 10.2869L6 22.2859C6 23.234 5.32969 24 4.5 24H1.5C0.670312 24 0 23.234 0 22.2859L0 10.2869C0 9.33881 0.670312 8.57281 1.5 8.57281Z" fill="white" fill-opacity="0.8" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-base">Fb</p>
                        </div>
                        <div>
                            <p className="text-base">Li</p>
                        </div>
                        <div>
                            <p className="text-base">Ig</p>
                        </div>
                        <div>
                            <p className="text-base">Tw</p>
                        </div>

                    </div>
                </div>

                <button id="close-menu2" className="custom-close-button">
          <div className="circle">
            <FiX className="close-icon" />
          </div>
        </button>
        </div>

        <div id="fullscreen-menu3">
                <div id="whoweare" className="main-menu-div z-[10000] flex flex-col justify-between items-center">
                    <h1 className='ml-auto text-5xl font-bold text-[#DF2323] leading-snug text-right mt-16 mr-10'>Who we are</h1>
                    
                    <div className="flex ml-96 sm:mx-24 flex-col sm:flex-row gap-10 sm:gap-4 justify-end">
                    <div className="menu-1 flex flex-col mr-auto w-1/4"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">01</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/who'>Our Brand</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col w-1/5 ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">02</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/approach'>Our Approach</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-[345px] sm:mx-24 flex-col sm:flex-row gap-10 sm:gap-14 justify-end">
                    <div className="menu-1 flex flex-col mr-auto w-1/4"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">03</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/culture'>Our Culture</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col w-1/5 ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">04</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/team'>Our Team</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-96 sm:mx-24 flex-col sm:flex-row gap-10 sm:gap-0 justify-end">
                    <div className="menu-1 flex flex-col mr-auto w-1/4"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">05</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/industries'>Our Industries</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col w-1/5 ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">06</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/awards'>Our Awards</Link></span>
                    </div>
                    </div>

                    <div className="social flex text-white gap-4 ml-auto pl-7 mr-16 mb-2 text-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none">
                                <path d="M14.6906 0.0503525C15.9094 0.328899 16.7016 1.68414 16.4578 3.07687L16.35 3.68753C16.1016 5.11776 15.6422 6.47835 15 7.71574L21.75 7.71574C22.9922 7.71574 24 8.86742 24 10.2869C24 11.2779 23.5078 12.1403 22.7859 12.5689C23.2969 13.0403 23.625 13.7634 23.625 14.5723C23.625 15.8257 22.8375 16.8703 21.8016 17.0953C22.0078 17.4863 22.125 17.9416 22.125 18.4291C22.125 19.57 21.4734 20.5396 20.5734 20.8717C20.6062 21.0485 20.625 21.236 20.625 21.4288C20.625 22.8483 19.6172 24 18.375 24H13.8047C12.9141 24 12.0469 23.7 11.3062 23.1376L9.50156 21.7609C8.25 20.8074 7.5 19.2004 7.5 17.4809L7.5 11.5243C7.5 9.96018 8.12344 8.4871 9.1875 7.50683L9.53437 7.19079C10.7766 6.05517 11.625 4.45889 11.9344 2.68047L12.0422 2.06981C12.2859 0.677082 13.4719 -0.228194 14.6906 0.0503525ZM1.5 8.57281H4.5C5.32969 8.57281 6 9.33881 6 10.2869L6 22.2859C6 23.234 5.32969 24 4.5 24H1.5C0.670312 24 0 23.234 0 22.2859L0 10.2869C0 9.33881 0.670312 8.57281 1.5 8.57281Z" fill="white" fill-opacity="0.8" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-base">Fb</p>
                        </div>
                        <div>
                            <p className="text-base">Li</p>
                        </div>
                        <div>
                            <p className="text-base">Ig</p>
                        </div>
                        <div>
                            <p className="text-base">Tw</p>
                        </div>

                    </div>
                </div>
                <button id="close-menu3" className="custom-close-button">
          <div className="circle">
            <FiX className="close-icon" />
          </div>
        </button>
        </div>
    </div>
  );
};

export default NavbarAndFullscreenMenu;
