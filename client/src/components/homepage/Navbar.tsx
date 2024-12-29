import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <>
    <header className="w-full sticky flex justify-between gap-8 items-center top-0 left-0 z-30 shadow-lg transition-all duration-200 linear ">
        <nav className="w-full flex justify-between items-center px-8 py-4">
            <h2>
                DV
            </h2>
            <ul className="flex gap-8 text-xs px-3 py-2">
                <li >
                    <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={"/issue-doc"}>Inssue</NavLink>
                </li>
                <li>
                    <NavLink to={"/my-docs"}>My Documents</NavLink>
                </li>
                <li>
                    <NavLink to={"/validate"}>Validate</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar
