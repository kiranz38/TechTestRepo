import React from 'react';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
export const NavbarComponent = () =>{
 return   (<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
    <div className="container">
    <a className="navbar-brand"  href="#"><Rocket/></a>
    <a className="navbar-brand" href="#">SpaceX Data</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        
    
        
       
        </ul>
    </div>
    </div>
    </nav>)
}