import React, {useState} from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu'
import arrow from '../assets/Vector (2).png'
import Footer from '../components/footer/footer'
import service from '../assets/service.png'
const Ourblogs = () => {

    const [selected, setSelected] = useState(0);

  const blogs = [
    { title: "All Blogs", count: 22 },
    { title: "Strategy and Creative", count: 7 },
    { title: "Digital", count: 4 },
    { title: "Data and Analytics", count: 3 },
    { title: "Design", count: 2 },
    { title: "Marketing", count: 2 },
    { title: "Performance Marketing", count: 2 },
    { title: "Press Releases", count: 2 }
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className='px-14 sm:px-34 sm:mx-5'>
                <div className="flex gap-10 flex-col lg:flex-row sm:gap-40">
                    <div>
                        <h1 className="text-6xl leading-tight text-[#DF2323] sm:text-[6rem] font-semibold">Empowering <br /> Insights and <br /> Perspectives <br /> </h1>
                    </div>

                    <div className="mt-10 text-left text-base font-normal leading-6 tracking-normal">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex items-center justify-between mb-2">
                        <a
                        href="#"
                        className={`hover: ${selected === index ? 'font-bold' : 'font-normal'}`}
                        onClick={() => handleClick(index)}
                        >
                        {blog.title}
                        </a>
                        <span
                        className={`ml-5 rounded-full px-3 py-1 ${selected === index ? 'bg-[#FCAB64]' : 'bg-[#252624]'} text-white`}
                        style={{ lineHeight: '18.61px' }}
                        >
                        {blog.count.toString().padStart(2, '0')}
                        </span>
                        </div>
                    ))}
                    </div>   
                </div>

            <div className=' mb-28'>
                <div className="h-[3px] bg-black m-auto my-10"></div>
                <div className="flex justify-start flex-col sm:flex-row">
                    <img className='w-5/12' src="./blog-img1.png" alt="" />
                    <div className='px-10'>
                    <p className='text-3xl leading-snug font-medium text-[#231F20]'>GIANT Reflections: Our First <br /> Canadian Marketing <br /> Award Win!</p>
                    <p className='py-5 font-normal text-base leading-6 text-[#231F20]'>On Friday, November 10th at approximately 9pm in Toronto’s Westin Harbour Castle Hotel, the very une...</p>
                    <div className="flex gap-6 flex-col sm:flex-row pt-5">
                    <a href="" className=" bg-[#FCAB64] w-max mb-10 px-5 rounded-full py-1 text-white text-xl font-normal">MARKETING</a>
                    <p className='pt-1 font-normal text-lg leading-7 text-[#231F20]'>November 17, 2023</p>
                    </div>
                    </div>
                    <a href="#" className="h-[20%] inline-block p-4 rounded-full bg-[#FCAB64]">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 18.5L18 2.5M18 2.5H3.6M18 2.5V16.9" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>       
                </div>
                <div className="h-[3px] bg-black m-auto my-10"></div>
            </div>

        </div>
        <Footer />
        </div>
    )
}

export default Ourblogs