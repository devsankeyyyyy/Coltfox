import React, {useState} from 'react'
import NavbarAndFullscreenMenu from '../components/menu/menu';
import Footer from '../components/footer/footer';

const Faq = () => {

  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    { id: 'q-1',
     question: 'What are the Digital Marketing Trends for 2024 ?',
      answer: [
        "The reality of modern digital marketing is quite simple - to target a particular set of audience and being conversational as well as personalized. Not long ago, Data-driven and Programmatic Marketing using Artificial Intelligence were considered as aspiring and bold concepts that bordered on the ridiculous.",
        "But currently, these are the most preferred digital marketing techniques for 2023. Along with these, other methods such as Social Media Marketing, Content Marketing, Search Engine Marketing, Micro-moments Marketing, Voice and Visual Search Engine Optimization, Chatbots, Omni-channel Marketing, Personalized Marketing, Influencer Marketing and Video Marketing still continue to be among the top priorities for various online business owners in the year 2024."
      ] 
    },
    { id: 'q-2',
     question: 'What is an example of digital marketing?',
      answer: [
        "The concept of digital marketing is quite simple. It aims at promoting brands and businesses through various digital technologies that include the internet, MMS, SMS, etc. All marketing strategies include setting certain objectives that are based on the survey of the target audience and the prevailing market information and then selecting a preferable marketing channel and/or platform.",
        "The concept of digital marketing is quite simple. It aims at promoting brands and businesses through various digital technologies that include the internet, MMS, SMS, etc. All marketing strategies include setting certain objectives that are based on the survey of the target audience and the prevailing market information and then selecting a preferable marketing channel and/or platform."
      ] 
    },
  ];

  const toggleDropdown = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  const renderSvg = (questionId) => {
    if (activeQuestion === questionId) {
      return (
        <svg onClick={() => toggleDropdown(questionId)} className={`dropdown-menu cursor-pointer transform transition duration-800 ease-in-out ${activeQuestion === questionId ? 'rotate-180' : 'rotate-0'}`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5963 16.445C17.914 16.7619 17.914 17.2819 17.5963 17.5988C17.2794 17.9157 16.7643 17.9157 16.4466 17.5988L13.0049 14.1538L9.53874 17.6231C9.21862 17.94 8.70027 17.94 8.38015 17.6231C8.06083 17.2981 8.06083 16.7781 8.38015 16.4613L11.8463 12.9919L8.4045 9.55501C8.08681 9.23813 8.08681 8.7181 8.4045 8.40122C8.72056 8.08435 9.23568 8.08435 9.55337 8.40122L12.9951 11.8462L16.4872 8.35252C16.8074 8.03565 17.3249 8.03565 17.645 8.35252C17.9644 8.67752 17.9644 9.18934 17.645 9.51434L14.1537 13.0081L17.5963 16.445ZM13 0C5.81994 0 0 5.8175 0 13C0 20.1825 5.81994 26 13 26C20.1801 26 26 20.1825 26 13C26 5.8175 20.1801 0 13 0Z" fill="white"/>
        </svg>
      );
    } else {
      return (
        <svg onClick={() => toggleDropdown(questionId)} className={`dropdown-menu cursor-none transform transition duration-800 ease-in-out ${activeQuestion === questionId ? 'rotate-180' : 'rotate-0'}`} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3346 10.0013C15.3346 9.26493 14.7377 8.66797 14.0013 8.66797C13.2649 8.66797 12.668 9.26493 12.668 10.0013V12.668H10.0013C9.26493 12.668 8.66797 13.2649 8.66797 14.0013C8.66797 14.7377 9.26493 15.3346 10.0013 15.3346H12.668V18.0013C12.668 18.7377 13.2649 19.3346 14.0013 19.3346C14.7377 19.3346 15.3346 18.7377 15.3346 18.0013V15.3346H18.0013C18.7377 15.3346 19.3346 14.7377 19.3346 14.0013C19.3346 13.2649 18.7377 12.668 18.0013 12.668H15.3346V10.0013ZM0.667969 14.0013C0.667969 6.6375 6.6375 0.667969 14.0013 0.667969C21.365 0.667969 27.3346 6.6375 27.3346 14.0013C27.3346 21.365 21.365 27.3346 14.0013 27.3346C6.6375 27.3346 0.667969 21.365 0.667969 14.0013Z" fill="#FCAB64"/>
        </svg>
      );
    }
  };

    return (
        <div className='bg-[#F2F2F2]'>
            <NavbarAndFullscreenMenu />
            <div className='px-6 py-8 sm:px-24 sm:py-16'>
                    <h1 className="text-7xl text-left leading-[6rem] text-[#DF2323] font-black">FAQ's</h1>
                    <div className='flex flex-col gap-6 pt-10 text-xl sm:text-2xl font-normal leading tight text[#1F1F21]'>
                    <p>With over 10 years of experience in Marketing and content COLT FOX DIGITAL knows how to research, recommend, and deploy digital FOX marketing campaigns that bring definitive results. Our hands-on approach ensures that each client has a truly customized program, tailored to fit their own business wants and needs. When you see an increase in followers on social media or in web traffic, that is when you know that we have delivered results.</p>
                    <p>Check out the most common digital marketing company questions we get asked by business owners. Understanding how digital marketing works is important to be able to identify the best digital marketing agency to have in your corner.</p>
                    </div>
            </div>

    <div className='px-6 py-4 sm:px-24 sm:py-10 flex flex-col gap-4'>
      {questions.map(({ id, question, answer }) => (
        <div key={id} className='flex flex-col'>
          <div className="flex">
            <div className={`line w-2.5 h-auto ${activeQuestion === id ? 'bg-white' : 'bg-[#FCAB64]'}`} />
            <div className={`text-box font-medium text-2xl leading-tight text-[#1F1F21] px-8 py-4 w-full flex justify-between ${activeQuestion === id ? 'bg-[#FCAB64]' : 'bg-white'}`}>
              {question}
              {renderSvg(id)}
            </div>
          </div>
          {activeQuestion === id && (
            <div className="flex">
            <div className="line w-2.5 h-auto bg-white"/>
            <div className='px-8 py-6 w-full text-white bg-[#FCAB64] flex flex-col gap-4'>
            {answer.map((paragraph, index) => (
               <p key={index}>{paragraph}</p>
            ))}
            </div>
            </div>
          )}
        </div>
      ))}
    </div>

    <Footer />
    </div>
    )
}

export default Faq