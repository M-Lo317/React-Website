import React from 'react';
import Link from 'next/link';

class Navbar extends React.Component {

  state = {
    open: false
  }

  handleNavbarToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    return (
      <nav>
        <div className="navbar-toggler">
          <button className="navbar-toggler-button" onClick={() => this.handleNavbarToggle()}>
            III
          </button>
        </div> 
        <div className={this.state.open ? "navbar open" : "navbar" }>
          <ul className="navbar-links">
            <li className="">
              <Link href="/">
                <a className="">
                  Home
                </a>
              </Link>
            </li>
            <li className="">
              <Link href="/images">
              <a className="">
                Images
              </a>
              </Link>
            </li>
            <li className="">
              <Link href="/about">
                <a className="">
                  About
                </a>
              </Link>
            </li>  
          </ul>
        </div>
      </nav>
    );
  }
};

export default Navbar;
