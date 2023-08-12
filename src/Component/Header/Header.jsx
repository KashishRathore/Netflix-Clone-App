import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
  return (
       <header className='showcase'>
           <div className="showcase-top">
            <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="logo" />
            <Link to="/" className="btn btn-rounded" >  
                 Sign In
            </Link>
           </div>
           <div className="showcase-content">
               <h1>Unlimited movies, shows and more</h1>
               <p>Watch anywhere, Cancel Anytime</p>
               <Link to="/netflix-show" className='btn btn-xl'>
                  Watch Free For 30 Days
                  <i className='fa fa-chevron-right btn-icon'></i>
               </Link>
           </div>
       </header>
  )
}

export default Header