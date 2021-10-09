import React, { Component } from "react";
import {Link} from 'react-scroll'

class Menu extends Component {
    render() {
      return (
        <ul className="header">
            <li>
                <Link activeClass="active" 
                    to="home" offset={-100}
                    spy={true} 
                    smooth={true}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="stuff" offset={-100}
                    spy={true} 
                    smooth={true}>
                    Stuff
                </Link>
            </li>
            <li>
                <Link to="contact" offset={-100}
                    spy={true} 
                    smooth={true}>
                    Contact
                </Link>
            </li>
        </ul>
      );
    }
  }
   
export default Menu;