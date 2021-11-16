import React, { Component } from "react";
 
class Programme extends Component {
  render() {
    return (
      <section id="programme" className="block">
        <div className="row">
          <h1>
            Au programme
          </h1>
          <div className="desc">
            <p>
              Vous êtes attendus à partir de 18h à La Cassagne, 
              Rignac, en Aveyron pour une soirée de retrouvailles 
              et de célébration.
            </p>
            <p>
              À 19h, une cérémonie laïque de renouvellement 
              de vœux sera proposée à l'initiative de nos témoins. 
              Suivi d'un méchoui et d'une soirée dans le pré (petite laine conseillée).
            </p>
          </div>
        </div>
        <div className="row mod-temoin">
          <div className="fiche-temoin">
            <div className="photo-pastille">
              <img src="/img/kirby175.jpg"/>
            </div>
            <h3>
              John Doe
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="fiche-temoin">
            <div className="photo-pastille">
              <img src="/img/kirby175.jpg"/>
            </div>
            <h3>
              John Doe
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div><div className="fiche-temoin">
            <div className="photo-pastille">
              <img src="/img/kirby175.jpg"/>
            </div>
            <h3>
              John Doe
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div><div className="fiche-temoin">
            <div className="photo-pastille">
              <img src="/img/kirby175.jpg"/>
            </div>
            <h3>
              John Doe
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Programme;