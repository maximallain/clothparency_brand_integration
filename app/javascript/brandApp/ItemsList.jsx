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
    return (
      <div className="container items-list">
        <div className="row">
          {this.state.items.map(item => (
            <Item
              key={item.id}
              item={item}
              deleteItem={this.deleteItem}
              brands={this.state.brands}
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
