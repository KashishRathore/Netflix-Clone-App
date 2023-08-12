import React from 'react';
import "./Header.scss"
import logo from "../../logo.png"
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi"

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />

            <div>
                <Link to="/tvshows">TV Shows</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/recentlyadded">Recently Added</Link>
                <Link to="/mylist">My List</Link>
            </div>

          <FiSearch/>

        </nav>
    )
}

export default Header