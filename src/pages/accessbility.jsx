import React, { useEffect, useRef, useState } from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Accessibility = () => {


    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            
            <div className=" mt-10 px-3 pb-14 text-center sm:px-20 text-[#DF2323] text-6xl sm:text-[6rem] font-semibold leading-tight">
                <h1> ACCESSIBILITY </h1>
            </div>

            <img className='w-full' src='./accessibility.png' alt='' />
            
            <div className="mx-8 sm:mx-20 py-20 text-[#012033] text-xl sm:text-[1.5rem] font-normal leading-9">
                <p> This privacy policy has been compiled to better serve those who are concerned with how their Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website. </p>
            </div>

            <div className='mx-8 sm:mx-20'>
            <div className='flex flex-col sm:flex-row gap-10 sm:gap-32 justify-between pb-16'>
            <div className='text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2'>
            What personal information do we collect from the people that visit our blog, website or app?
            </div>
            <div className='font-normal text-xl leading-9 text-[#012033] pt-2 w-fit sm:w-1/2'>
            When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.
            </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-10 sm:gap-32 justify-between pb-16'>
            <div className='text-4xl leading-normal font-semibold text-[#012033] w-fit sm:w-1/2'>
            When do we collect information?
            </div>
            <div className='font-normal text-xl leading-9 text-[#012033] pt-2 w-fit sm:w-1/2'>
            When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.
            </div>
            </div>
            </div>

            <Footer />
        </div>
    )
}

export default Accessibility