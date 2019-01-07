import React, { Component } from "react";

class Item extends Component {
  state = {
    item: this.props.item,
    showDetails: false
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
    return (
      <div className="item">
        <h2>{this.state.item.name_ref}</h2>
        <button className="showDetails" onClick={this.onClick}>
          Show Details
        </button>
        <button
          className="delete-btn"
          onClick={() => this.props.deleteItem(this.state.item.id)}
        >
          Delete
        </button>
        {this.state.showDetails ? (
          <div className="details">
            <div className="details_id">Id : {this.state.item.id}</div>
            <div className="code_ref">
              Reference Code : {this.state.item.code_ref}
            </div>
            <div className="price">Price : {this.state.item.price}</div>
            <div className="zone_filature">
              Filature zone: {this.state.item.zone_filature}
            </div>
            <div className="zone_filature">
              Tissage zone : {this.state.item.zone_tissage}
            </div>
            <div className="zone_filature">
              Eutrophisation zone : {this.state.item.zone_eutrophisation}
            </div>
            <div className="zone_filature">
              Production zone : {this.state.item.zone_production}
            </div>
            <div className="zone_filature">
              Brand id : {this.getBrandName(this.state.item.brand_id)}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Item;
