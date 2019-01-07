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

  componentWillMount() {
    fetch("http://localhost:3000/api/v1/brands")
      .then(response => response.json())
      .then(data => {
        this.setState({ brands: data });
      });

    fetch("http://localhost:3000/api/v1/items")
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      });
  }

  render() {
    console.log(this.state.brands);
    return (
      <div>
        {this.state.items.map(item => (
          <Item
            key={item.id}
            item={item}
            deleteItem={this.deleteItem}
            brands={this.state.brands}
          />
        ))}
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          // contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <ProductForm brands={this.state.brands} />
        </Modal>
      </div>
    );
  }
}
export default ItemsList;
