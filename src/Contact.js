import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : '',
      lastName : '',
      email : '',
      phone : '',
      attend : 'yes',
      number : '',
      message : ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <section id="contact" className="block">
        <div className="row">
          <h2>Formulaire de contcat</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label for="firstName"> Prénom :</label>
              <input type="text" name="firstName" required
                onChange={this.handleInputChange} />
            </div>
            <div>
              <label for="lastName">Nom :</label>
                <input type="text" name="lastName" required
                  onChange={this.handleInputChange}/>
            </div>
            <div>
              <label for="email">Email :</label>
              <input type="email" name="email" required
                onChange={this.handleInputChange}/>
            </div>
            <div>
              <label for="phone">Téléphone :</label>
              <input type="tel" name="phone" 
                onChange={this.handleInputChange}/>
            </div>
            <div>
              <input type="radio" name="attend" value="yes" checked 
                onChange={this.handleInputChange}/>
              <label for="yes">Je confirme ma présence</label>
            </div>
            <div>
              <input type="radio" name="attend" value="no" 
                onChange={this.handleInputChange}/>
              <label for="no">Je regrette de ne pas pouvoir venir</label>
            </div>
            <div>
              <label for="number">Nombre de personnes :</label>
              <input type="number" name="number" required
                onChange={this.handleInputChange}/>
            </div>
            <div>
              <label for="message">Message :</label>
              <textarea name="message"  
                onChange={this.handleInputChange}/>
            </div>
            <div>
              <input type="submit" value="Envoyer" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}
 
export default Contact;