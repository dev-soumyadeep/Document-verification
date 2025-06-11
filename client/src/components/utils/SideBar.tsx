import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../../redux/slices/authSlice';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface SidebarOption {
  path: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  options: SidebarOption[];
}

const Sidebar: React.FC<SidebarProps> = ({ options }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

   return (
    <div 
      className={`
        fixed left-4 top-4 bottom-4 
        flex flex-col
        bg-gray-800 rounded-2xl shadow-lg
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
    >
      {/* Header with toggle button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <h2 className="text-blue-400 font-bold text-xl">DV</h2>}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-gray-200"
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Navigation Options */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          {options.map((option, index) => (
            <li key={index}>
              <NavLink
                to={option.path}
                className={({ isActive }) => `
                  flex items-center gap-3 px-3 py-2 rounded-lg
                  transition-colors duration-200
                  ${isActive 
                    ? 'bg-sky-600 text-gray-100' 
                    : 'text-gray-100 hover:bg-gray-700/50 hover:text-blue-400'}
                `}
              >
                <span className="text-xl">{option.icon}</span>
                {!isCollapsed && <span>{option.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Auth Section */}
      <div className="p-4 border-t border-gray-700">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-900 text-blue-100 flex items-center justify-center text-sm font-medium">
              {user?.name.charAt(0).toUpperCase()}
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-200">{user?.name}</p>
                <p className="text-xs text-gray-400">{user?.email}</p>
              </div>
            )}
          </div>
        ) : (
          <div className={`flex ${isCollapsed ? 'flex-col' : ''} gap-2`}>
            <NavLink
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 rounded-lg text-center"
            >
              {isCollapsed ? "In" : "Log in"}
            </NavLink>
            {!isCollapsed && (
              <NavLink
                to="/register"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Sign up
              </NavLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;