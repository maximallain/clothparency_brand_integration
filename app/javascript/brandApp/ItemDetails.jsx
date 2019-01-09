import React, { Component } from "react";

class ItemDetails extends Component {
  state = {
    item: this.props.item,
    brand: this.props.brand,
    category: this.props.category,
    closeModal: this.props.closeModal,
    materials: this.props.materials,
    labelProducts:  this.props.labelProducts,
  };

  render() {
    return (
      <div>
        <div className="modal-header">
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
        </div>
        <div className="modal-body">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Reference Code</th>
                <td>{this.state.item.code_ref}</td>
              </tr>
              <tr>
                <th scope="row">Brand</th>
                <td>{this.state.brand}</td>
              </tr>
              <tr>
                <th scope="row">Category</th>
                <td>{this.state.category}</td>
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
                <th scope="row">Composition</th>
                <td>
                  {this.state.materials.map(material => {
                    return (
                      <tr key={material.name}>
                        <th scope="row" />
                        <td className="material-name">{material.name}</td>
                        <td>{material.percent}%</td>
                      </tr>
                    );
                  })}
                </td>
              </tr>
              <tr>
                <th scope="row">Labels</th>
                <td>
                  {this.state.labelProducts.map(label => {
                    return (
                      <tr key={label}>
                        <th scope="row" />
                        <td className="material-name">{label}</td>
                      </tr>
                    );
                  })}
                </td>
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
