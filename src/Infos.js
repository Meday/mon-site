import React, { Component } from "react";
 
class Infos extends Component {
  render() {
    return (
      <section id="infos" className="block">
        <div className="row">
          <h1>
            Ils se sont mariés le 12 septembre 2020, la Covid les a privé de vous, 
            maintenant rattrapons le temps passé et fêtons cela dignement !
          </h1>
          <div className="map">
            <h3>Ça se passe ici :</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.6526342496209!2d2.304729829256436!3d44.40011595687477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI0JzAwLjQiTiAywrAxOCcxOS4wIkU!5e0!3m2!1sfr!2sfr!4v1635597389807!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy"></iframe>
          </div>
          <div className="link-to">
            <h3>Vous cherchez un hébergement ?</h3>
            <a className="btn" href="https://www.airbnb.fr/s/Rignac/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=december&flexible_trip_dates%5B%5D=november&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Rignac&place_id=ChIJ-weDiY93rRIRMAxDL5z2BgQ&checkin=2022-06-25&checkout=2022-06-26&source=structured_search_input_header&search_type=user_map_move&ne_lat=44.4214592076204&ne_lng=2.319340534280826&sw_lat=44.39782282447473&sw_lng=2.2754381371250645&zoom=15&search_by_map=true">
              Essayez AirBnB
            </a>
            <a className="btn" href="https://campinglapeyrade.fr/">
              Ou le camping ?
            </a>
            <a className="btn" href="https://www.odalys-vacances.com/location-campagne/sud-ouest/rignac/le-hameau-du-lac.html">
              En résidence vacances ?
            </a>
            <a className="btn" href="https://www.gites-de-france.com/fr/search?destination=Rignac&towns=40471&travelers=2&seed=5d7714c7">
              Dans un gîte ?
            </a>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Infos;