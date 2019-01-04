import React, { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      brands: [],
      categories: []
    };
    //this.deleteItem = deleteItem;
  }

  /*deleteItem(id) {
    fetch("http://localhost:3000/api/v1/items/" + id, {
      method: "DELETE"
    });
  }*/

  componentWillMount() {
    fetch("http://localhost:3000/api/v1/brands")
      .then(response => response.json())
      .then(data => {
        this.setState({ brands: data });
      });

    fetch("http://localhost:3000/api/v1/items")
      .then(response => response.json())
      .then(data => {
        let items = data.map(item => {
          return (
            <Item key={item.id} item={item} deleteItem={this.deleteItem} />
          );
        });
        this.setState({ items: items });
      });
  }

  render() {
    console.log(this.state.brands);
    return <ul>{this.state.items}</ul>;
  }
}

export default ItemsList;
