import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
   const dispatch = useDispatch();


  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const navItems = [
    { name: 'Dashboard', path: '/dashboard/' },
    { name: 'Orders', path: '/dashboard/orders' },
    { name: 'Positions', path: '/dashboard/positions' },
    { name: 'Holdings', path: '/dashboard/holdings' },
    { name: 'Funds', path: '/dashboard/funds' },
    { name: 'Apps', path: '/dashboard/apps' },
  ];

  const currentIndex = navItems.findIndex(item => location.pathname === item.path);

  const handleLogout = async() => {
      const res = await dispatch(logoutUser());
  };

  return (
    <div className="container-fluid border-bottom py-2 position-relative">
      <div className="row align-items-center">
        <div className="col-3">
          <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
        </div>
        <div className="col-9 d-flex justify-content-end gap-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-link ${index === currentIndex ? 'text-danger fw-bold' : 'text-dark'}`}
            >
              {item.name}
            </Link>
          ))}

          {/* User Dropdown */}
          {user ? (
            <div className="position-relative">
              <span
                className="fw-bold text-primary"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {user.name}
              </span>

              {showDropdown && (
                <ul
                  className="dropdown-menu show mt-2"
                  style={{ position: 'absolute', right: 0 }}
                >
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <span className="fw-bold">Guest</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
