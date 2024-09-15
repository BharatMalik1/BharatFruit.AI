import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for navbar styling
import profileImage from '../../assets/profile_icon.png'; // Import your profile image

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in (using localStorage for simplicity)
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    window.location.reload(); // Refresh to reset the UI
  };

  const goToHome = () => {
    navigate('/home'); // Navigates to the home page
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={goToHome}>Fruit.ai</div>
      
      <div className="nav-links">
        {/* If the user is logged in, show profile image; otherwise show login button */}
        {isLoggedIn ? (
          <div className="navbar-profile">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              onClick={handleLogout} // Logout on click
            />
          </div>
        ) : (
          <button className="nav-button" onClick={() => navigate('/login')}>Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

