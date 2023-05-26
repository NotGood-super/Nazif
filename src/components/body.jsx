import React from 'react'
import Brand from  "../assets/nazif-high-resolution-logo-black-on-white-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faEbay } from '@fortawesome/free-brands-svg-icons'

const Body = () => {
  return (
    <div>
        <div className='md:max-w-[800px] w-full h-screen mx-auto text-center'>
            <img src={Brand} alt='/' className='md:w-[190px] w-[100px] md:h-[185px] h-[100px] md:mt-[50px] mt-[115px] mx-auto rounded-full'/>
            <h2 className='md:text-4xl text-2xl font-bold text-black md:my-5 my-2 tracking-widest'>Nazif Brand</h2>
            <p className='md:text-2xl text-sm text-black mx-14 md:mb-10 mb-6 md:mt-4 font-semibold'>Welcome to Nazif clothing brand, where fashion meets expression. Our designs radiate confidence, empowering you to embrace your true self. From effortlessly chic basics to bold statement pieces, we curate collections that inspire and elevate your style. Unleash your fashion prowess and make a statement that truly defines you.</p>
            <div className='md:w-[400px] hover:bg-slate-300 w-[300px] cursor-pointer md:p-5 p-3 md:my-6 my-3 mx-auto text-center rounded-xl bg-white shadow-lg '>
                <a href="https://www.facebook.com/nazifbrand" className='md:text-3xl text-xl flex  '>
                    <FontAwesomeIcon icon={faFacebook} className='md:text-4xl text-2xl'/>
                   <p className='mx-auto font-mono font-medium'>Facebook</p> 
                </a>
            </div>

            <div className='md:w-[400px] hover:bg-slate-300 w-[300px] cursor-pointer md:p-5 p-3 md:my-6 my-3 mx-auto text-center rounded-xl bg-white shadow-lg '>
                <a href="https://www.instagram.com/nazif_brand" className='md:text-3xl text-xl flex  '>
                    <FontAwesomeIcon icon={faInstagram} className='md:text-4xl text-2xl'/>
                   <p className='mx-auto font-mono font-medium'>Instagram</p> 
                </a>
            </div>

            <div className='md:w-[400px] hover:bg-slate-300 w-[300px] cursor-pointer md:p-5 p-3 md:my-6 my-3 mx-auto text-center rounded-xl bg-white shadow-lg '>
                <a href="https://www.tiktok.com/@nazifbrand" className='md:text-3xl text-xl flex  '>
                    <FontAwesomeIcon icon={faTiktok} className='md:text-4xl text-2xl'/>
                   <p className='mx-auto font-mono font-medium'>Tiktok</p> 
                </a>
            </div>

             <div className='md:w-[400px] hover:bg-slate-300 w-[300px] cursor-pointer md:p-5 p-3 md:my-6 my-3 mx-auto text-center rounded-xl bg-white shadow-lg '>
                <a href="/" className='md:text-3xl text-xl flex  '>
                    <FontAwesomeIcon icon={faEbay} className='md:text-4xl text-2xl'/>
                   <p className='mx-auto font-mono font-medium'>Ebay</p> 
                </a>
            </div>

           
            
        </div>
    </div>
  )
}

export default Body