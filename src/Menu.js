import React, { Component } from "react";
import {Link} from 'react-scroll'

class Menu extends Component {
    render() {
      return (
        <ul className="header">
            <li>
                <Link activeClass="active" 
                    to="invitation"
                    spy={true} 
                    smooth={true}>
                    Invitation
                </Link>
            </li>
            <li>
                <Link to="programme"
                    spy={true} 
                    smooth={true}>
                    Programme
                </Link>
            </li>
            <li>
                <Link to="infos"
                    spy={true} 
                    smooth={true}>
                    Infos pratiques
                </Link>
            </li>
            <li>
                <Link to="contact"
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