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
    showDetails: false,
    openModal: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  getBrandName = id => {
    let name = "NO NAME";
    this.props.brands.map(
      brand => brand.id === this.state.item.brand_id && (name = brand.name)
    );
    return name;
  };

  onClick = () => {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {
    console.log(this.state.item);
    return (
      <div className="col-sm-6">
        <div className="card item-card">
          <div className="card-body">
            <h2 className="card-title">{this.state.item.name_ref}</h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.state.item.code_ref}
            </h6>
            <div class="btn-toolbar">
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
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          // contentLabel="Example Modal"
          //className="modal-component"
          // {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <ItemDetails item={this.state.item} closeModal={this.closeModal} getBrandName={this.getBrandName}/>
        </Modal>
      </div>

      // <div className="item">
      //   <h2 className="item__title"></h2>
      //   <button className="showDetails" onClick={this.onClick}>
      //     Show Details
      //   </button>
      //   <button
      //     className="btn btn-danger"
      //     //className="delete-btn"
      //     onClick={() => this.props.deleteItem(this.state.item.id)}
      //   >
      //     Delete
      //   </button>
      //   {this.state.showDetails ? (
      //     <div className="details">
      //       <div className="details_id">Id : {this.state.item.id}</div>
      //       <div className="code_ref">
      //         Reference Code : {this.state.item.code_ref}
      //       </div>
      //       <div className="price">Price : {this.state.item.price}</div>
      //       <div className="zone_filature">
      //         Filature zone: {this.state.item.zone_filature}
      //       </div>
      //       <div className="zone_filature">
      //         Tissage zone : {this.state.item.zone_tissage}
      //       </div>
      //       <div className="zone_filature">
      //         Eutrophisation zone : {this.state.item.zone_eutrophisation}
      //       </div>
      //       <div className="zone_filature">
      //         Production zone : {this.state.item.zone_production}
      //       </div>
      //       <div className="zone_filature">
      //         
      //       </div>
      //     </div>
      //   ) : null}
      // </div>
    );
  }
}

export default Item;
