import React from 'react';
import logo from '../gym.jpg';
import './Header.css';

const Header = () => {
  return (
    <div>
      <section className="m-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} alt="" />
            <h2 className="logo text-danger">Gym-Center</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto fs-5">
                <li className="nav-item">
                  <a className="nav-link text-primary" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
