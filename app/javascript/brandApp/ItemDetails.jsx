import React, { Component } from "react";

class ItemDetails extends Component {
  state = {
    item: this.props.item,
    brand: this.props.brand,
    closeModal: this.props.closeModal
  };

  render() {
    return (
      <div>
        <div className="modal-body">
          <h5 className="modal-title" id="exampleModalLabel">
            {this.state.item.name_ref}
          </h5>
          <button
            type="button"
            className="close"
            onClick={this.state.closeModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">Reference Code</th>
                <td>{this.state.item.code_ref}</td>
              </tr>
              <tr>
                <th scope="row">Price</th>
                <td>{this.state.item.price} €</td>
              </tr>
              <tr>
                <th scope="row">Filature zone</th>
                <td>{this.state.item.zone_filature}</td>
              </tr>
              <tr>
                <th scope="row">Tissage zone</th>
                <td>{this.state.item.zone_tissage}</td>
              </tr>
              <tr>
                <th scope="row">Eutrophisation zone</th>
                <td>{this.state.item.zone_eutrophisation}</td>
              </tr>
              <tr>
                <th scope="row">Production zone</th>
                <td>{this.state.item.zone_production}</td>
              </tr>
              <tr>
                <th scope="row">Brand</th>
                <td>{this.state.brand}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.state.closeModal}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    );
  }
}
export default ItemDetails;
