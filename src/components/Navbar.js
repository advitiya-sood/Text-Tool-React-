import React from 'react'
import PropTypes from 'prop-types';
import {useState} from 'react'
import {Link} from 'react-router-dom'




export default function Navbar(props) {
 

  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link to='/' className="navbar-brand">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/about" className="nav-link" >About</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              More
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        
        <div className='d-flex justify-content-end' style={{height: '30px', width: '30px'}}>
        <button type="button" onClick={()=>props.theme('green')} className="btn btn-success mx-2"  ></button>
        <button type="button" onClick={()=>props.theme('red')} className="btn btn-danger mx-2"  ></button>
        <button type="button" onClick={()=>props.theme('yellow')} className="btn btn-warning mx-2"></button>
        </div>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}  mx-2 `}>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.capital(props.mode==='light'?'dark':'light')}Mode</label>
                                                 {/* // capital function used from app.js  ^^ */}
        </div>                                                                  
      </div>
    </div>
  </nav>
  
  )

}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Set the title",
    about: "Set the about"
}