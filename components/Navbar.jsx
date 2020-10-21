import React from 'react';

const Navbar = () => {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light" > 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href='#'>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Images</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link disabled" href="#">About</a>
            </li>  
          </ul>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
