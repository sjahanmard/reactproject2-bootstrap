import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">Sobhan Jahanmard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#skills" className="nav-link">Skills</a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link">Questions</a>
              </li>
              <li className="nav-item">
                <a href="#Previous Employers" className="nav-link">Previous Employers</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
}
 
export default Navbar;