import React, { Component } from "react";
import Menu from "./Menu";
import Invitation from "./Invitation";
import Programme from "./Programme";
import Infos from "./Infos";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
        <div>
            <Menu/>
            <div className="content" id="content">
                <Invitation/>
                <Programme/>
                <Infos/>
                <Contact/>
            </div>
        </div>
    );
  }
}
 
export default Main;