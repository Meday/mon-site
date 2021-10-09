import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <div>
            <Menu/>
            <h1>Simple SPA</h1>
            <div className="content">
                <Home/>
                <Stuff/>
                <Contact/>
            </div>
        </div>
    );
  }
}
 
export default Main;