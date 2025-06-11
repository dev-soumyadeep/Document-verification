import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarProps } from '../../types/Navbar'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated, selectUser } from '../../redux/slices/authSlice'

const Navbar: React.FC<NavbarProps> = ({ options }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const user = useSelector(selectUser)

  return (
    <header className="w-full sticky flex justify-between gap-8 items-center top-0 left-0 z-0 transition-all duration-200 linear rounded-t-xl bg-white shadow-sm">
      <nav className="w-full flex items-center px-8 py-4">
        {/* Logo */}
        <div className="flex-none">
          <h2 className="text-[#114897] font-bold text-xl">DV</h2>
        </div>

        {/* Center Navigation */}
        <ul className="flex-1 flex justify-center gap-8 text-sm text-slate-600">
          {options.map((option, index) => (
            <li key={index}>
              <NavLink 
                to={option.path} 
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-500 font-medium" 
                    : "hover:text-blue-500"
                }
              >
                {option.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons or User Avatar */}
        <div className="flex-none flex gap-4">
          {!isAuthenticated ? (
            <>
              <NavLink
                to={"/login"}
                className={({ isActive }) => 
                  isActive 
                    ? "px-4 py-2 text-sm font-medium text-blue-500" 
                    : "px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-500"
                }
              >
                Log in
              </NavLink>
              <NavLink
                to={"/register"}
                className="px-4 py-2 text-sm font-medium text-white bg-[#114897] rounded-lg hover:bg-[#0f3c7a] transition-colors"
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#317de9] text-white flex items-center justify-center text-sm font-medium">
              {user?.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar