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
    zone_filature: "",
    zone_eutrophisation: "",
    zone_production: "",
    zone_tissage: "",
    materials: {},
    labelProducts: {},
    brand_id: -1,
    brand_name: "",
    category_id: -1,
    category_name: "",
    price: ""
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
    const target = event.target;
    const value = target.value;

    for (let node of target.children) {
      if (node.value === value) {
        this.setState({
          brand_id: node.getAttribute("data-key"),
          brand_name: node.value
        });
      }
    }
  };

  handleCategoryChange = event => {
    const target = event.target;
    const value = target.value;

    for (let node of target.children) {
      if (node.value === value) {
        this.setState({
          category_id: node.getAttribute("data-key"),
          category_name: node.value
        });
      }
    }
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
      body: JSON.stringify({
        item: {
          name_ref: this.state.name_ref,
          code_ref: this.state.code_ref,
          brand_id: this.state.brand_id,
          category_id: this.state.category_id,
          zone_eutrophisation: this.state.zone_eutrophisation,
          zone_filature: this.state.zone_filature,
          zone_production: this.state.zone_production,
          zone_tissage: this.state.zone_tissage,
          price: price
        }
      })
      //this.state })
    });
  };

  render() {
    const { brands, categories } = this.props;
    const {
      code_ref,
      name_ref,
      zone_filature,
      zone_tissage,
      zone_eutrophisation,
      zone_production,
      brand_name,
      category_name,
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
              <label className="col-sm-2 col-form-label">Nom</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="name_ref"
                  placeholder="Name"
                  value={name_ref}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Référence</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="code_ref"
                  placeholder="Reference"
                  value={code_ref}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Prix</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="Prix"
                  value={price}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Marque</label>
              <div className="col-sm-10">
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="brand_name"
                  value={brand_name}
                  onChange={this.handleBrandChange}
                >
                  <option key={0} data-key={0} defaultValue>
                    -
                  </option>
                  {brands.map(brand => {
                    return (
                      <option key={brand.id} data-key={brand.id}>
                        {brand.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Catégorie</label>
              <div className="col-sm-10">
                <select
                  className="custom-select mr-sm-2"
                  id="inlineFormCustomSelect"
                  name="categorie_name"
                  value={category_name}
                  onChange={this.handleCategoryChange}
                >
                  <option key={0} data-key={0} defaultValue>
                    -
                  </option>
                  {categories.map(category => {
                    return (
                      <option key={category.id} data-key={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Zone de filature
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="zone_filature"
                  placeholder="Zone de filature"
                  value={zone_filature}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Zone d'eutrophisation
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="zone_eutrophisation"
                  placeholder="Zone d'eutrophisation"
                  value={zone_eutrophisation}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Zone de production
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="zone_production"
                  placeholder="Zone de production"
                  value={zone_production}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Zone de tissage</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="zone_tissage"
                  placeholder="Zone de tissage"
                  value={zone_tissage}
                  onChange={this.handleInputChange}
                />
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
