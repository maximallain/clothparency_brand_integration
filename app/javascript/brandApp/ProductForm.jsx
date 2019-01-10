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
    labelProducts: {},
    brand_id: -1,
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

  render() {
    const { brands, categories } = this.props;
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
      <div>
        <div className="modal-header-2">
          <button
            type="button"
            className="close"
            onClick={this.props.closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Reference</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Reference"
                />
              </div>
            </div>

            <div class="form-group row">
              <label className="col-sm-2 col-form-label">Marque</label>
              <div className="col-sm-10">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>-</option>
                  {brands.map(brand => {
                    return <option value={brand.id}>{brand.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label className="col-sm-2 col-form-label">Catégorie</label>
              <div className="col-sm-10">
                <select
                  class="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                >
                  <option selected>-</option>
                  {categories.map(category => {
                    return <option value={category.id}>{category.name}</option>;
                  })}
                </select>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              bsStyle="success"
              onClick={this.props.closeModal}
            >
              Fermer
            </button>
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ProductForm;
