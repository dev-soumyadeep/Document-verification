import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
const Footer:React.FC = () => {
  return (
    <div className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left m-5 pt-4 pl-5 pr-5'>
      <div>
      © 2024 DV. All rights reserved.
      </div>
      <div className='space-y-2 lg:space-y-0 lg:space-x-6'>
        <ul className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-2 lg:gap-6'>
            <li>
                <NavLink to={"/report"}>Audit Reports</NavLink>
            </li>
            <li>
                <NavLink to={"/portfolio"}>Contact</NavLink>
            </li>
            <li>
                <NavLink to={"/career"}>Career</NavLink>
            </li>
            <li>
                <NavLink to={"/github"}>Smart Contracts</NavLink>
            </li>
            <li>
                <NavLink to={"/whitepaper"}>WhitePaper</NavLink>
            </li>
        </ul>
      </div>
      <div className='flex justify-center lg:justify-end items-center gap-6'>
       <a href="http://localhost:5173/lndin" className='text-2xl sm:text-3xl lg:text-4xl'> 
        <FaLinkedin/>
       </a>
       <a href="http://localhost:5173/x" className='text-2xl sm:text-3xl lg:text-4xl'>
        <FaXTwitter/>
       </a>  
       <a href="http://localhost:5173/github" className='text-2xl sm:text-3xl lg:text-4xl'>
        <FaGithub/>
       </a>  
      </div>
    </div>
  )
}

export default Footer
