import React, { useEffect, useRef, useState } from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Permarketing = () => {

    const [dropdownsOpen, setDropdownsOpen] = useState({
        menu1: false,
        menu2: false,
        menu3: false,
        menu4: false,
        menu5: false,
        menu6: false,
    });

    const handleSvgClick = (menu) => {
        setDropdownsOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
    };

    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />

            <div className="acma mt-10 px-3 pb-0 sm:pb-6 text-center sm:px-20 text-[#DF2323] text-5xl sm:text-[6rem] font-bold leading-tight">
                <h1> Big ideas </h1>
                <h1> FOX results </h1>
                <h1> with performance </h1>
                <h1> marketing </h1>
            </div>

            <div className="flex justify-center items-center pt-20 pb-5 w-full md:w-3/4 lg:w-1/2 mx-auto">
                <div className='flex flex-col items-center justify-center'>
                <div className="inner-shadow-top bg-[#FCAB64] w-max mb-10 px-5 rounded-full py-2 text-white text-xl font-normal relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black via-black to-transparent opacity-5"></div>
                    PERFORMANCE MARKETING
                </div>
                    <div className="text-center px-5 pb-10 text-[#012033] text-4xl sm:text-[4rem] font-bold leading-tight">
                        Creative solutions for measurable results.
                    </div>
                    <div className="text-center px-5 pb-10 text-[#012033] text-2xl sm:text-[1.5rem] font-normal">
                        <p> We use a strategic, creative, and integrative approach that delivers impressive success aligned with your mission. </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center pb-10 w-full md:w-4/5 lg:w-5/6 mx-auto">
                <img className='w-full' src='./per-marketing-mainimg.png' alt='per-marketing-main' />
            </div>

            <div className="mt-0 sm:mt-12 bg-[url('/greypaper.jpeg')] bg-cover">
                <div className="flex mx-4 sm:mx-16 flex-col sm:flex-row">
                    <div className="mt-8 mr-0 sm:mt-28 sm:mr-24 ">
                        <div className=" bg-[#FCAB64] w-max mb-0 sm:mb-8 px-5 rounded-full py-1 text-white text-xl font-normal">Our Approach</div>
                        <div className="font-poppins text-5xl sm:text-[6rem] font-semibold leading-[144px] text-white">
                            WE THINK BIG.
                        </div>
                        <div className="mt-2 sm:mt-8 flex items-center text-4xl sm:[2rem] font-semibold leading-none text-white gap-5">
                            <div className="flex w-14 h-10 rounded-full border-2 border-[#DF2323] text-[#DF2323] items-center justify-center text-[19px] leading-[30px]">01</div>
                            Our Approach
                        </div>
                        <div className="my-8 bg-[#FCAB64] h-0.5 w-full "></div>
                        <div className=" text-[#012033] text-xl font-normal leading-8">
                            Lorem ipsum dolor sit amet. Ut ducimus officia quo ducimus corrupti sed eius saepe aut atque consectetur? Sit magnam iure ab asperiores laboriosam ex reprehenderit dolores sed earum vero vel nihil excepturi id nihil voluptas.Sit autem consectetur ut aliquam omnis sed odio magni vel dolores assumenda ab sunt iusto est deleniti accusamus eum fugiat tempora? Ut repellendus galisum sed fugiat adipisci sit distinctio voluptate ut assumenda dicta et voluptatum dolor et harum voluptatibus.
                        </div>
                    </div>
                    <div className="logo hidden lg:block mr-12 mt-28 w-full md:w-3/4 lg:w-1/3 flex justify-center items-center flex-col">
                        <svg width="461" height="649" viewBox="0 0 461 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M359.056 117.971C236.727 184.252 176.171 106.31 59.4916 220.462C21.3521 257.002 7.22611 306.855 1.57579 360.673C-2.09692 408.26 1.57545 506.55 3.27067 554.704C10.0511 544.506 7.22593 531.76 16.549 522.129C25.0244 478.225 80.9626 432.904 122.775 419.591C163.457 406.561 266.011 397.78 286.352 438.569C295.392 428.938 308.953 433.47 323.079 417.325C337.487 400.896 344.268 375.119 349.918 369.171C308.671 373.42 297.652 387.299 253.862 362.373C217.135 341.695 217.418 326.683 199.337 295.525C183.59 325.929 163.675 342.478 114.185 336.03C112.49 309.687 135.488 284.194 157.807 272.581C189.166 256.152 211.202 268.615 241.432 275.98C290.024 287.593 375.627 277.113 404.726 234.908C414.614 221.595 431.848 187.887 432.413 172.025C417.722 177.407 397.663 205.166 362.914 211.681C386.08 188.17 419.417 170.325 425.067 129.82C399.358 146.532 395.12 160.695 357.828 169.192C371.672 158.145 402.749 129.82 404.726 111.691C400.206 113.108 369.792 128.281 359.056 133.096C344.366 139.895 322.712 152.306 307.159 156.693C322.712 149.281 344.931 137.798 359.056 117.971Z" fill="url(#paint0_linear_1111_1133)" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M354.192 122.217C327.088 144.853 324.665 145.209 298.113 160.94C319.234 157.914 338.897 147.167 353.588 140.368C364.324 135.553 392.196 119.398 396.434 117.982C394.456 136.11 373.502 159.473 348.042 173.636C392.209 162.755 393.276 154.339 416.951 136.738C411.301 177.527 364.45 208.738 353.127 216.124C387.877 209.609 409.106 188.166 424.796 177.881C424.231 193.743 407.529 230.195 397.641 243.225C464.879 183.458 482.237 77.6121 427.994 0C418.671 29.4586 413.303 45.8875 395.787 72.2303C387.877 84.4103 371.692 107.091 354.192 122.217Z" fill="url(#paint1_linear_1111_1133)" />
                            <path d="M50.5808 617.489C60.7441 617.489 72.7183 630.272 70.9073 649.009H0.545574C0.545574 649.009 -1.4125 392.664 2.09072 354.425C5.59395 316.185 21.1103 256.702 51.4251 229.793C37.2951 352.212 155.711 352.746 202.403 290.693C242.179 365.631 278.034 381.744 355.13 365.755C327.184 453.429 242.617 459.228 237.756 459.228C232.896 459.228 86.9357 427.25 53.1217 552.702L50.5808 617.489Z" fill="#F22929" />
                            <mask id="mask0_1111_1133" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="229" width="356" height="421">
                                <path d="M50.5808 617.489C60.744 617.489 72.7182 630.272 70.9072 649.009H0.545524C0.545524 649.009 -1.41255 392.664 2.09067 354.425C5.5939 316.185 21.1102 256.702 51.425 229.793C37.2951 352.212 155.711 352.746 202.403 290.693C242.179 365.631 278.034 381.744 355.13 365.755C327.184 453.429 242.617 459.229 237.756 459.229C232.896 459.229 86.9357 427.25 53.1216 552.702L50.5808 617.489Z" fill="#DF2323" />
                            </mask>
                            <g mask="url(#mask0_1111_1133)">
                                <path d="M-28.6562 566.432C-28.6562 475.779 68.023 402.145 173.343 402.145C278.663 402.145 364.041 475.633 364.041 566.286V577.907C364.041 668.56 278.663 753.728 173.343 753.728C68.023 753.728 -25.8311 695.324 -25.8311 604.671L-28.6562 566.432Z" fill="url(#paint2_linear_1111_1133)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1111_1133" x1="321.756" y1="197.727" x2="70.5941" y2="303.552" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FCAB64" />
                                    <stop offset="0.755208" stopColor="#FD504F" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1111_1133" x1="445.846" y1="22.6605" x2="376.322" y2="186.819" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FCC391" />
                                    <stop offset="1" stopColor="#1F1F21" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1111_1133" x1="141.278" y1="426.838" x2="34.5943" y2="646.84" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#1F1F21" />
                                    <stop offset="1" stopColor="#FCC391" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="mt-12 sm:mt-32 2xl:mt-44 pb-10 flex items-center justify-center text-[#012033] text-left gap-2.5  text-lg font-light leading-5">
                    LEARN MORE
                    <svg width="25" height="34" viewBox="0 0 25 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1425_7088)">
                            <path className="page3-scroller-line" d="M13.9805 13.7344C13.9805 13.1821 13.5328 12.7344 12.9805 12.7344C12.4282 12.7344 11.9805 13.1821 11.9805 13.7344V21.7344C11.9805 22.2867 12.4282 22.7344 12.9805 22.7344C13.5328 22.7344 13.9805 22.2867 13.9805 21.7344V13.7344Z" fill="#012033" />
                            <path d="M24.2305 12C24.2305 5.7868 19.1937 0.75 12.9805 0.75C6.76727 0.75 1.73047 5.7868 1.73047 12V22C1.73047 28.2132 6.76727 33.25 12.9805 33.25C19.1937 33.25 24.2305 28.2132 24.2305 22V12Z" stroke="#012033" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1425_7088">
                                <rect width="24" height="34" fill="white" transform="translate(0.980469)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className=" left flex-col sm:flex-row flex gap-6 sm:gap-20 mx-4 py-12 sm:mx-16 sm:py-20">
                <div className="title text-center bg-[#FCAB64] h-[20%] w-fit sm:w-1/3 px-2 rounded-full py-2 text-white text-xl font-normal">SUPPORTING SOLUTIONS</div>
                <div className='lg:mt-10 sm:mt-3 w-full'>
                    <div className="leading-tight text-[#012033] text-4xl sm:text-[3rem] font-semibold">
                        Create unexpected experiences. Incite curiosity. Change behaviours.
                    </div>
                    <div className='text-2xl font-normal leading-9 text-[#012033] pt-8 gap-10'>
                        <p>We focus on strategic, data-driven solutions to amplify your message.</p>
                    </div>
                    <div className="mt-7 bg-white flex flex-col">
                        <div className="menu-1 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-fit">
                                Media Planning
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu1')}
                                className={`dropdown-menu1 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu1 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu1 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu1 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>We also help you in Media Planning by Creating an elevated customer journey requires a broad perspective. We plan, buy, and optimize media using a multi-channel approach.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />
                        <div className="menu-2 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-3/5 sm:w-fit">
                                Performance Creative
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu2')}
                                className={`dropdown-menu2 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu2 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu2 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu2 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>We also help you in performance creative Ads need to be memorable and measurable today. We combine data and technology with creativity to share stories, drive action, and deliver impact results.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />
                        <div className="menu-3 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-5/6 sm:w-fit">
                                SEM (Search Engine Marketing)
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu3')}
                                className={`dropdown-menu3 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu3 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu3 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu3 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>At Coltfox, we use paid and unpaid methods to increase traffic and brand awareness for quick results. if client need the traffic organically without any paid campaign with everlasting results, we work on custom plans from 6-12 months.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />
                        <div className="menu-4 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-3/5 sm:w-fit">
                                Paid Digital & Social Media
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu4')}
                                className={`dropdown-menu4 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu4 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu4 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu4 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>At Coltfox, Our high-impact pay-per-click advertising and social media marketing drive results for continuous campaign growth to maximize conversions and generate more sales. Clients who are looking for paid social media campaigns on monthly targets.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />
                        <div className="menu-5 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                                Programmatic Media Buying
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu5')}
                                className={`dropdown-menu5 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu5 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu5 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu5 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>Reach your audience in real-time with precision targeting to drive conversions and build brand awareness. with this service programmatic media buying we at Coltfox help you in step by step process.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />
                        <div className="menu-6 pt-5 px-2 sm:px-5 flex items-center">
                            <div className="text-3xl font-semibold leading-9 text-[#012033] w-4/5 sm:w-fit">
                                Direct Response Marketing
                            </div>
                            <svg
                                onClick={() => handleSvgClick('menu6')}
                                className={`dropdown-menu6 cursor-pointer ml-auto mr-0 sm:mr-4 transform transition-transform duration-300 ${dropdownsOpen.menu6 ? 'rotate-180' : 'rotate-0'}`}
                                width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                            >
                                {dropdownsOpen.menu6 ? (
                                    // svg for "-" 
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="#FCAB64"/>
                                ) : (
                                    // svg for "+" 
                                    <>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
                                    </>
                                )}
                            </svg>
                        </div>
                        {dropdownsOpen.menu6 && (
                            <div className=" bg-white w-full p-5 leading-8 text-xl font-light text-[#012033]">
                                <p>We’ll define your goals, crystallize your audience, and then execute an integrated media strategy to drive customers where you want them to go with the target based acquisitions in no time. with real time results.</p>
                            </div>
                        )}
                        <div className="h-0.5 w-full bg-gray-800 mt-5" />

                    </div>

                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Permarketing