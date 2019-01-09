import React, { Component } from "react";
import Item from "./Item";
import Modal from "react-modal";
import ProductForm from "./ProductForm";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class ItemsList extends Component {
  state = {
    items: [],
    brands: [],
    categories: [],
    materials: [],
    labelProducts: [],
    assemblies: [],
    specifications: [],
    modalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  deleteItem = id => {
    fetch("http://localhost:3000/api/v1/items/" + id, {
      method: "DELETE"
    }).then(response => {
      this.setState(state => {
        return { items: state.items.filter(item => item.id !== id) };
      });
    });
  };

  getBrandName = id => {
    let brand_name = "NO BRAND";
    this.state.brands.map(
      brand => brand.id === id && (brand_name = brand.name)
    );
    return brand_name;
  };

  getCategoryName = id => {
    let category_name = "NO CATEGORY";
    this.state.categories.map(
      category => category.id === id && (category_name = category.name)
    );
    return category_name;
  };

  getMaterialName = id => {
    let material_name = "NO MATERIAL NAME";
    this.state.materials.map(
      material => material.id === id && (material_name = material.name)
    );
    return material_name;
  };

  getMaterials = id => {
    let materials = [];
    this.state.assemblies.map(
      assembly =>
        assembly.item_id === id &&
        materials.push({
          name: this.getMaterialName(assembly.material_id),
          percent: assembly.percent
        })
    );
    return materials;
  };

  getLabelName = id => {
    let label_name = "NO LABEL NAME";
    this.state.labelProducts.map(
      label => label.id === id && (label_name = label.name)
    );
    return label_name;
  };

  getLabelProducts = id => {
    let labelProducts = [];
    this.state.specifications.map(
      specification =>
      specification.item_id === id &&
        labelProducts.push(
          this.getLabelName(specification.label_product_id),
        )
    );
    return labelProducts;
  };

  async getData() {
    const categoriesRes = await fetch(
      "http://localhost:3000/api/v1/categories"
    );
    const categories = await categoriesRes.json();
    const brandsRes = await fetch("http://localhost:3000/api/v1/brands");
    const brands = await brandsRes.json();
    const materialsRes = await fetch("http://localhost:3000/api/v1/materials");
    const materials = await materialsRes.json();
    const labelProductsRes = await fetch(
      "http://localhost:3000/api/v1/label_products"
    );
    const labelProducts = await labelProductsRes.json();
    const assembliesRes = await fetch(
      "http://localhost:3000/api/v1/assemblies"
    );
    const assemblies = await assembliesRes.json();
    const specificationsRes = await fetch(
      "http://localhost:3000/api/v1/specifications"
    );
    const specifications = await specificationsRes.json();
    const itemsRes = await fetch("http://localhost:3000/api/v1/items");
    const items = await itemsRes.json();
    this.setState({
      categories: categories,
      brands: brands,
      materials: materials,
      labelProducts: labelProducts,
      assemblies: assemblies,
      specifications: specifications,
      items: items
    });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    console.log(this.state)


    return (
      <div className="container items-list">
        <div className="row">
          {this.state.items.map(item => (
            <Item
              key={item.id}
              item={item}
              deleteItem={this.deleteItem}
              brand={this.getBrandName(item.brand_id)}
              category={this.getCategoryName(item.category_id)}
              materials={this.getMaterials(item.id)}
              labelProducts={this.getLabelProducts(item.id)}
            />
          ))}
        </div>

        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={this.openModal}
        >
          Ajouter un produit
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          //style={customStyles}
          // contentLabel="Example Modal"
          //className="modal-component"
          // {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <div className="modal-header">
            <h5 className="modal-title">Ajouter un produit</h5>
            <button type="button" className="close" onClick={this.closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ProductForm brands={this.state.brands} />
        </Modal>


        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  bsStyle="success"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default ItemsList;
