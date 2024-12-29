import React from 'react'
import image from "../assets/Hero.svg"
const Hero:React.FC = () => {
  return (
    <>
      <section className='flex h-[90vh] w-[80%] mx-auto items-center gap-8 justify-between'>
        <div className='flex flex-col gap-6 flex-1 items-start'>
          <h1>Trust, Transparency, and Security — Redefined</h1>
          <p>
          Experience the future of document verification with blockchain-powered security and transparency. <br />
          We ensure your documents are immutable, tamper-proof, and instantly verifiable—building trust like never before.
          </p>
          <button type="button" className='inline-block px-6 py-3  text-base font-bold bg-blue-500 rounded-lg text-center cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:translate-y-[-2px] active:bg-blue-800 active:translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>Dashboard</button>
        </div>
        <div className='w-full flex-1'>
            <img src={image} alt="Hero" />
        </div>
      </section>
    </>
  )
}

export default Hero

