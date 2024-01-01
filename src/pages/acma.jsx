import React, { useEffect, useRef, useState } from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Acma = () => {

    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className="px-3 py-10 text-center sm:px-0 sm:pl-0 text-[#012033] text-2xl sm:text-[2rem] font-bold">
                <p> ASSOCIATION </p>
            </div>
            <div className="acma px-3 pb-10 text-center sm:px-20 text-[#DF2323] text-6xl sm:text-[6rem] font-bold">
                <h1> ACMA - ASSOCIATION OF INDIA </h1>
            </div>
            <img className='w-full' src='./acma-main.png' alt='acma-main' />

            <div className="right-align pt-10 sm:w-[90%] sm:ml-[5rem] sm:mr-[5rem] flex flex-col sm:flex-row">

                <div className='bg-orange-300 h-[20%] px-5 rounded-full py-2 shadow-lg text-white'>
                    CHALLENGES
                </div>
                <div className='ml-28 sm:w-[80%]'>
                    <div className="sm:leading-[normal] text-[#012033] text-5xl sm:text-[3rem] font-semibold">
                        <p><strong>India's automotive industry is a vital sector, contributing 49% to the country's manufacturing GDP, 7.5% to the overall GDP, and supporting approximately 38 million jobs.</strong></p>
                    </div>

                    <div className="content px-3 sm:px-0 pt-8 leading-9 text-2xl font-normal">
                        <li className="mb-10">
                            ACMA plays a crucial role in the industry's development in India, actively engaging in trade promotion, technology enhancement, quality improvement, and information dissemination. It participates in international trade fairs, sends trade delegations overseas, and publishes materials on various automotive industry-related subjects.
                        </li>
                        <li className='mb-10'>
                            This growth in domestic auto component sales to OEMs, reaching Rs. 4.76 lakh crores (USD 59.3 billion), reflects a 39.5% increase compared to the previous year. The demand for higher-value components and a shift towards larger, more powerful vehicles contributed to this growth.
                        </li>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col sm:flex-row'>
                <div>
                    <img className='m-auto' src="sliding-img1.png" alt="" />
                </div>
                <div>
                    <img className='m-auto' src="sliding-img2.png" alt="" />
                </div>
                <div>
                    <img className='m-auto' src="sliding-img3.png" alt="" />
                </div>
                <div>
                    <img className='m-auto' src="sliding-img4.png" alt="" />
                </div>
            </div>

            <div className='px-5 sm:ml-[5rem] sm:mr-[5rem] mt-20'>
                <div className="sm:w-[100%]">
                    <div className=" bg-[#FCAB64] w-max mb-10 px-10 rounded-full py-2 shadow-xl text-white  ">Solutions</div>
                    <p className='text-3xl font-normal leading-normal text-[#012033]'>Coltfox enhanced their acts as a catalyst in enhancing growth & evolution of the Indian auto component industry, with formulating the innovative solutions for creating resilient & robust business models for auto component suppliers.for developmental policies pertaining to the Indian auto component industry at both national & international levels. They are the Global promoters of ‘Made in India’ auto components. Creating an environment of a responsible corporate culture & behavior among member organizations.</p>
                </div>

                <div className="flex gap-10 sm:flex-row mt-20 flex-col">

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Market Research</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>The Coltfox team looked at targeted variables in our research, including age, gender, income level, geo- location, level of education, and new Indian Association status globally.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Creative Strategy</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>We leveraged the power of video to spotlight successful association leaders of India. Globally to inspire association target audience. The data helped us shape our message, tone, and call to actions.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Landing Page</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>We controlled the customer journey, from ad-click to form submission, with dedicated landing pages to leverage our content strategy and targeted messaging.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex gap-10 sm:flex-row my-20 flex-col">

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Video Production</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>Coltfox video production team lined up 10 Events franchisees to showcase their unique franchisee experience through dynamic storytelling.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Ad Development</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>Capturing high-resolution stills from our video production shoots, we ensured uniformity across dynamic and static ads.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start sm:w-1/3">
                        <div className=' flex flex-col '>
                            <div className="flex  gap-5 items-center">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <rect width="18" height="18" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                <use xlinkHref="#image0_1425_5415" transform="scale(0.0416667)" />
                                            </pattern>
                                            <image id="image0_1425_5415" width="24" height="24" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAsBJREFUSEu11U/IVVUUBfDfV5alWWJqaolGYkE0kBqIkqCBZAPBGqgpBU10IBVNGhtBTRPCiEic6EAaVRpY0UAqFFEwIgL/4L+kUqwwy69PZcU+9Xi890zNAxfuPfecs/ZZe+21h/w7bsFfuNQxd7WvY/Enctb5bB7CTbiIB/AOHsNt2I2VODkAJfvvx2bMxmR8gefxI4az4FZMxzf1HsDOW9w3AORhfIJ7cQGjK5gcPhc/BCDPTizCVryEXPVNPIMv8UTdspu+j/BUx75xeB3LsRfzGkAoyshNjtf7GJwuPvux9EcFE3oP4c5a/zN+wYQA3Iwz9fPuStI5PIRv64aDkp2khvtfa9Es7MMdOTsAGR9iCT7AyziL9/AstmBVH4RdoQHvF6URxEY8V8le2AAeLM5CS+Yi11FFVw44VgBtfcOLgqK25CzKy0iyf8cjONW5YRrWF3qUtR3rcPgKxRCQt4uB5OwAXqh9o7sjyllNKblNkng9hfc3Hd0jBw53XDnf1wzSC2Cko8Lb//8VINHn4CT5hgAk2qggyrghACmcqKgXfVfrrv9QEd3PxCbMr3Lfhlf/g0ynVoGm8lO9n2EtjibQZhVxwz1V8qEo8/GneMqcAW6aoGIL48ti4qYptLhpzPNIoyGomXi3op6EVyqSr8oOetHzMRZXP4jFxJNew4py4QWt4UQ5oSmu2Nz09jKw3+KKfchv8k01H6nmFZA4a/xsWgPIR7w8dh1aUsHxp+8KOC2w1/ipeJ+COHD8KI4csIyhloOv0brTi9VP44pP41M82Qfgcywo532j1mzAUuzAsgCEinuwH3d1OGJeY15x0xZRN06SHHFMrKByVpwgzeZRnGg3SNOZgbfKFXP19Og1OFiK6lcD6dnpGY9XQN9jdaw6BdtZTAFpDpqkZ2QuT6TXa0SWSXT3/+QsMh+5DHPioE56YgN+AAAAAElFTkSuQmCC" />
                                        </defs>
                                    </svg>
                                </div>
                                <div className="bg-[#FCAB64] w-0.5 h-8"></div>
                                <h1 className='text-2xl font-semibold leading-7 text-[#DF2323]'>Deployment</h1>
                            </div>
                            <div className="pt-5 pl-16 sm:pl-16">
                                <p>Armed with targeting data and sophisticated creative, we achieved higher conversions and an improved user experience resulting in higher-quality leads.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <img className='w-full' src='./acma-award.png' alt='acma-main' />

            <div className="bg-[#D9D3D3] pt-10 px-5 sm:pl-[5rem] sm:pr-[5rem]">
                <div className='justify-center  items-center flex-col sm:flex-row flex gap-10'>
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9583 16.875L14.3333 24.5L21.9583 16.875ZM14.3333 24.5L21.9583 32.125L14.3333 24.5ZM14.3333 24.5H34.6667H14.3333ZM47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z" fill="white" />
                        <path d="M21.9583 16.875L14.3333 24.5M14.3333 24.5L21.9583 32.125M14.3333 24.5H34.6667M47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z" stroke="#FCAB64" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.0417 32.125L34.6667 24.5L27.0417 32.125ZM34.6667 24.5L27.0417 16.875L34.6667 24.5ZM34.6667 24.5H14.3333H34.6667ZM47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z" fill="white" />
                        <path d="M27.0417 32.125L34.6667 24.5M34.6667 24.5L27.0417 16.875M34.6667 24.5H14.3333M47.375 24.5C47.375 37.1336 37.1336 47.375 24.5 47.375C11.8665 47.375 1.625 37.1336 1.625 24.5C1.625 11.8665 11.8665 1.625 24.5 1.625C37.1336 1.625 47.375 11.8665 47.375 24.5Z" stroke="#FCAB64" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="left flex-col sm:flex-row flex gap-20 px-5 py-20">
                    <div className="bg-[#FCAB64] h-[20%] w-[12%] mb-10 px-10 rounded-full py-2 mt-2 shadow-lg text-white text-xl ">Results</div>
                    <div>
                        <div className="sm:leading-[normal] text-[#012033] text-5xl sm:text-[3rem] font-semibold">
                            Coltfox Wins in SIX Months
                        </div>
                        <div className='text-2xl font-normal leading-9 text-[#012033] pt-5 gap-10'>
                            <p>Remarkable success was achieved across key metrics. The Cost Per MQL (Marketing Qualified Lead) was just $2.69, 949% above industry standards, showcasing cost-efficiency in lead generation. The Click Through Rate (CTR) stood at 4.72%, exceeding industry norms by 525%, demonstrating effective audience engagement. Additionally, a Conversion Rate of 12.14% surpassed industry standards by 132%, signifying successful lead conversion. In contrast, the Cost Per SQL (Sales Qualified Lead) was below the industry standard, further highlighting the campaign’s overall excellence in lead generation, engagement, and conversion, boding well for McDonald’s marketing endeavours.</p>
                            <p className='pt-5'>This challenged our usual Digital Marketing process due to recommendations being prohibited. We had to pivot and create an educational and inspirational technician with case studies to further improve the customer's journey.</p>
                        </div>
                        <div className="flex gap-10 sm:flex-row mt-10 flex-col">

                            <div className="flex justify-start sm:w-[40%]">
                                <div className=' flex flex-col '>
                                    <div className="text-6xl font-bold leading-[normal] text-[#DF2323]">
                                        <h1>16.60%</h1>
                                    </div>
                                    <div className="pt-5 text-2xl font-normal leading-9 text-[#012033]">
                                        Cost Per MQL Lead – 48% below industry standard.
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start sm:w-[40%]">
                                <div className=' flex flex-col '>
                                    <div className="text-6xl font-bold leading-[normal] text-[#DF2323]">
                                        <h1>246 PM</h1>
                                    </div>
                                    <div className="pt-5 text-2xl font-normal leading-9 text-[#012033]">
                                        Cost Per MQL Lead – 949% below industry standard.
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-10 sm:flex-row mt-10 flex-col">

                            <div className="flex justify-start sm:w-[40%]">
                                <div className=' flex flex-col '>
                                    <div className="text-6xl font-bold leading-[normal] text-[#DF2323]">
                                        <h1>38%</h1>
                                    </div>
                                    <div className="pt-5 text-2xl font-normal leading-9 text-[#012033]">
                                        Conversion Rate – 12% to 38% in a month above industry standard.
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-start sm:w-[40%]">
                                <div className=' flex flex-col '>
                                    <div className="text-6xl font-bold leading-[normal] text-[#DF2323]">
                                        <h1>56%</h1>
                                    </div>
                                    <div className="pt-5 text-2xl font-normal leading-9 text-[#012033]">
                                        Conversion Rate – 32% to 56% in a month above industry standard.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='justify-center items-center'>
                    <h1 className='text-7xl text-center text-[#DF2323] font-bold leading-normal'>Faces of Coltfox Digital Marketing Campaign</h1>
                    <p className='text-2xl text-center text-[#012033] font-normal leading-normal py-10 px-20'>The structure of the site was optimised so that the right content was seen in the right place. We removed their catalogue of programmes from the site, as that’s what itv.com is for, and instead used specific programmes as case studies to showcase the amazing advertising successes ITV Media’s customers have had. This helped to reduce confusion, improve the customer experience and drive better quality leads.</p>
                </div>
                <div className='sm:mx-[1rem] py-5'>
                    <div className="sm:w-[100%]">
                        <div className=" bg-[#FCAB64] w-max mb-10 px-10 rounded-full py-2 shadow-lg font-normal text-white leading-7 text-xl ">Solutions</div>
                        <p className='text-2xl font-normal leading-normal text-[#012033]'>This experiment was designed to gain insight for an upcoming experiment on the header. We proposed adding a USP banner to the header, and as that is a significant addition, we used this opportunity to learn if users respond positively to a USP message. Throughout the duration of the experiment, this was consistently up against the control, showing users responded positively to the banner, showing that this is safe to include in the header redesign experiment, and that we could possibly tweak the USP points in order to improve trust in users who land on the site.</p>
                        <p className='text-2xl font-normal leading-normal text-[#012033] pt-8'>The new proposition formed the foundation for the information architecture and UX design, which was followed by the design and build of a new website.</p>
                    </div>
                </div>
                <div className="left flex-col sm:flex-row flex gap-20 px-5 py-20">
                    <div className="bg-[#FCAB64] h-[20%] w-[36%] mb-10 px-10 rounded-full py-2 mt-2 shadow-lg text-white text-xl ">Next Project</div>
                    <div>
                        <div className="leading-[normal] text-5xl sm:text-[3rem] font-semibold text-[#121212] mb-20">
                            Tool station launches latest catalog with deals and products. collaborative, and innovative thinking delivers big results.
                        </div>
                        <img src="/toolstationimg.png" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Acma