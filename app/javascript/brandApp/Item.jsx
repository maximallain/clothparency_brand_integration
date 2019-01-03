import React, { Component } from "react";
//import { deleteItem } from "../../actions/itemActions";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      showDetails: false
    };

    this.onClick = this.onClick.bind(this);
    this.deleteItem = props.deleteItem;
  }

  onClick() {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  }

 
  /*deleteIem() {
    fetch("/api/v1/items/" + this.props.item.id, "DELETE")
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
      });
  }*/

  render() {
    console.log(this.state.item.id);
    return (
      <div className="item">
        <h2>{this.state.item.name_ref}</h2>
        <button className="showDetails" onClick={this.onClick}>
          Show Details
        </button>
        <button
          className="delete-btn"
          onClick={this.deleteItem(this.state.item.id)}
        >
          Delete
        </button>
        {this.state.showDetails ? (
          <div className="details">id : {this.state.item.id}</div>
        ) : null}
      </div>
    );
  }
}

export default Item;
