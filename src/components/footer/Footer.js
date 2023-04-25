import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div class='footer'>
        <div class='row'>
          <ul>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div class='row'>
          Copyright © 2023 SnipSwipe - All rights reserved || Designed By:
          Ryuhei Sato
        </div>
      </div>
    </footer>
  );
}

export default Footer;
