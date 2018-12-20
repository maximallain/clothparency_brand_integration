import React, { Component } from "react";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code_ref: "",
      name_ref: "",
      categorie: 1,
      zone_filature: "",
      zone_eutrophisation: "",
      zone_production: "",
      zone_tissage: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("code_ref :" + this.state.code_ref);
    console.log("name_ref :" + this.state.name_ref);
    console.log("categorie :" + this.state.categorie);

    console.log("zone_filature :" + this.state.zone_filature);
    console.log("zone_eutrophisation :" + this.state.zone_eutrophisation);
    console.log("zone_production :" + this.state.zone_production);
    console.log("zone_tissage :" + this.state.zone_tissage);

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Code :
          <textarea
            name="code_ref"
            value={this.state.code_ref}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Name :
          <textarea
            name="name_ref"
            value={this.state.name_ref}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Catégorie :
          <select
            name="categorie"
            value={this.state.categorie}
            onChange={this.handleInputChange}
          >
            <option value="1">Jean</option>
            <option value="2">T-Shirt</option>
            <option value="3">Jupe</option>
            <option value="4">Robe</option>
          </select>
        </label>
        <br />
        <label>
          Zone de filature :
          <textarea
            name="zone_filature"
            value={this.state.zone_filature}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Zone de tissage :
          <textarea
            name="zone_tissage"
            value={this.state.zone_tissage}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Zone d'eutrophisation :
          <textarea
            name="zone_eutrophisation"
            value={this.state.zone_eutrophisation}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Zone de production :
          <textarea
            name="zone_production"
            value={this.state.zone_production}
            onChange={this.handleInputChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProductForm;
