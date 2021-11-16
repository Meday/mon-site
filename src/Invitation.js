import React, { Component } from "react";
import {Link} from 'react-scroll'
 
class Invitation extends Component {
  render() {
    return (
      <section id="invitation" className="block"
        style={{ backgroundImage: "url(/img/onestbeau.jpg)" }}>
          <div className="row">
            <h1>
              Caly & Médé vous invitent à célébrer l'amour et la vie, samedi 25 juin 2022 à Rignac (12)<br/>
              Dresscode : A vous d'allier l'élégance au mauvais goût avec un thème "haut chic bas choc".
            </h1>
            <div class="invitation_buttons">
              <Link to="contact"
                  offset={600}
                  spy={true} 
                  smooth={true}
                  className="btn">
                  Répondre à l'invitation
              </Link>
              <Link to="programme"
                  spy={true} 
                  smooth={true}
                  className="btn">
                  Infos pratiques
              </Link>
            </div>
          </div>
      </section>
    );
  }
}
 
export default Invitation;