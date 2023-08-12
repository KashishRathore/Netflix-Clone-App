import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
     <footer>
        <p>Questions? Call <a href='#'>000-800-919-1694</a></p>
        <div className="footer">
        <div className="box box1">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Media Centre</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Speed Test</a></li>
            <select name="language" id="language">
            <i class="fas fa-globe"></i>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
            <li>Netflix India</li>
        </div>

        <div className="box box2">
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Legal Notices</a></li>
        </div>


        <div className="box box3">
            <li><a href="#">Account</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Only on Netflix</a></li>
        </div>

        </div>
     </footer>
  )
}