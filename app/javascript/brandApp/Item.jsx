import React, { Component } from "react";
import picture from "../../assets/images/jean.jpeg";
import Modal from "react-modal";
import ItemDetails from "./ItemDetails";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Item extends Component {
  state = {
    item: this.props.item,
    brand: this.props.brand,
    category: this.props.category,
    materials: this.props.materials,
    labelProducts: this.props.labelProducts,
    showDetails: false,
    openModal: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  onClick = () => {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {
    return (
      <div className="col-sm-6">
        <div className="card item-card">
          <div className="card-body">
            <h2 className="card-title">{this.state.item.name_ref}</h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.state.item.code_ref}
              <span className="badge badge-secondary">
                {this.state.category}
              </span>
            </h6>
            <div className="btn-toolbar">
              <button onClick={this.openModal} className="btn btn-primary">
                Show Details
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.props.deleteItem(this.state.item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <ItemDetails
            item={this.state.item}
            closeModal={this.closeModal}
            brand={this.state.brand}
            category={this.state.category}
            materials={this.state.materials}
            labelProducts={this.state.labelProducts}
          />
        </Modal>
      </div>
    );
  }
}

export default Item;
