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
  state = {
    code_ref: "",
    name_ref: "",
    categorie: -1,
    zone_filature: -1,
    zone_eutrophisation: -1,
    zone_production: -1,
    zone_tissage: -1,
    materials: {},
    brand_id: this.props.brands[0].id,
    price: -1
  };

  handleInputChange = event => {
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
  };

  handleBrandChange = event => {
    this.setState({
      brand_id: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:3000/api/v1/items/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')
          .attributes.content.value
      },
      body: JSON.stringify({ item: this.state })
    });
  };

  renderMaterial(number) {
    var components = "";
    for (let i = 0; i > number; i++) {}

    return components;
  }

  render() {
    const { brands } = this.props;
    const {
      code_ref,
      name_ref,
      categorie,
      zone_filature,
      zone_tissage,
      zone_eutrophisation,
      zone_production,
      brand,
      price
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Code :
          <textarea
            name="code_ref"
            value={code_ref}
            onChange={this.handleInputChange}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Name :
          <textarea
            name="name_ref"
            value={name_ref}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Catégorie :
          <select
            name="categorie"
            value={categorie}
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
          Marque :
          <select name="brand" value={brand} onChange={this.s}>
            {brands &&
              brands.map(brand => {
                return (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                );
              })}
          </select>
        </label>
        <br />
        <label>
          Price :
          <textarea
            name="price"
            value={price}
            onChange={this.handleInputChange}
          />
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
        <label>
          Zone de filature :
          <select
            name="zone_filature"
            value={zone_filature}
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
            value={zone_tissage}
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
            value={zone_eutrophisation}
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
            value={zone_production}
            onChange={this.handleInputChange}
          >
            <option value="1">France</option>
            <option value="2">Inde</option>
            <option value="3">Vietnam</option>
            <option value="4">Belgique</option>
          </select>
        </label>
        <br />
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            bsStyle="success"
            onClick={this.closeModal}
          >
            Fermer
          </button>
          <button type="button" className="btn btn-primary">
            Valider
          </button>
        </div>{" "}
      </form>
    );
  }
}

export default ProductForm;
