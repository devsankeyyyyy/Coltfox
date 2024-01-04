import React from 'react';
import { Link } from 'react-router-dom';
import './menu2.css';

const Whatwedomenu = () => {
    return (

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
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Channel Marketing</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-96 sm:mx-32 flex-col sm:flex-row gap-12 sm:gap-0">
                    <div className="menu-1 flex flex-col sm:mr-36 w-2/3"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">03</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Lead Generation</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">04</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Content Marketing</Link></span>
                    </div>
                    </div>
                    <div className="flex ml-96 sm:mx-32 flex-col sm:flex-row gap-12 sm:gap-0">
                    <div className="menu-1 flex flex-col sm:mr-36 w-2/3"> 
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">05</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Hudbil Services</Link></span>
                    </div>
                    <div className="menu-2 flex flex-col ">
                    <span className="text-white font-bold text-sm leading-3 mb-2.5">06</span>
                    <span className="text-[#1F1F21] font-normal text-3xl leading-none"><Link to='/performance-marketing'>Kalacode Services</Link></span>
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
        </div>
)
}

export default Whatwedomenu