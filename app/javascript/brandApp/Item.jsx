import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      showDetails: false
    };

    this.onClick = this.onClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  onClick() {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  }

  deleteItem() {
    fetch("/api/v1/items/" + this.state.item.id, "DELETE")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
      });
  }

  render() {
    console.log(this.deleteItem);
    return (
      <div className="item">
        <h2>{this.state.item.name_ref}</h2>
        <button className="showDetails" onClick={this.onClick}>
          Show Details
        </button>
        <button className="delete-btn" onClick={this.deleteItem()}>
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
              Brand id : {this.state.item.brand_id}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Item;
