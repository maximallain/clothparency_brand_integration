import React, { Component } from "react";

const MaterialItem = ({ number, value, handleInputChange }) => (
  <label>
    Matériau {number} :
    <select
      name={`material${number}`}
      value={value}
      onChange={handleInputChange}
    >
      <option value="1">Laine</option>
      <option value="2">Chanvre</option>
      <option value="3">Coton</option>
    </select>
  </label>
);

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code_ref: "",
      name_ref: "",
      categorie: 1,
      zone_filature: 1,
      zone_eutrophisation: 1,
      zone_production: 1,
      zone_tissage: 1,
      materials: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name.startsWith("material")) {
      this.setState({
        ["materials"]: { [name]: value }
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(event) {
    console.log("code_ref :" + this.state.code_ref);
    console.log("name_ref :" + this.state.name_ref);
    console.log("categorie :" + this.state.categorie);

    console.log("zone_filature :" + this.state.zone_filature);
    console.log("zone_eutrophisation :" + this.state.zone_eutrophisation);
    console.log("zone_production :" + this.state.zone_production);
    console.log("zone_tissage :" + this.state.zone_tissage);
    console.log("materials :" + JSON.stringify(this.state.materials));
    console.log("material1 :", this.state.material1);
    console.log("state :", this.state);

    event.preventDefault();
  }

  renderMaterial(number) {
    var components = "";
    for (let i = 0; i > number; i++) {}

    return components;
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
          <select
            name="zone_filature"
            value={this.state.categorie}
            onChange={this.handleInputChange}
          >
            <option value="1">France</option>
            <option value="2">Inde</option>
            <option value="3">Vietnam</option>
            <option value="4">Belgique</option>
          </select>
        </label>
        <br />
        <label>
          Zone de tissage :
          <select
            name="zone_tissage"
            value={this.state.categorie}
            onChange={this.handleInputChange}
          >
            <option value="1">France</option>
            <option value="2">Inde</option>
            <option value="3">Vietnam</option>
            <option value="4">Belgique</option>
          </select>
        </label>
        <br />
        <label>
          Zone d'eutrophisation :
          <select
            name="zone_eutrophisation"
            value={this.state.categorie}
            onChange={this.handleInputChange}
          >
            <option value="1">France</option>
            <option value="2">Inde</option>
            <option value="3">Vietnam</option>
            <option value="4">Belgique</option>
          </select>
        </label>
        <br />
        <label>
          Zone de production :
          <select
            name="zone_production"
            value={this.state.categorie}
            onChange={this.handleInputChange}
          >
            <option value="1">France</option>
            <option value="2">Inde</option>
            <option value="3">Vietnam</option>
            <option value="4">Belgique</option>
          </select>
        </label>
        <br />

        <MaterialItem
          number="1"
          value="material1"
          handleInputChange={this.handleInputChange}
        />
        <br />
        <MaterialItem
          number="2"
          value="material2"
          handleInputChange={this.handleInputChange}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProductForm;
