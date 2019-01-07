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
  }

  deleteItem = id => {
    fetch("http://localhost:3000/api/v1/items/" + id, {
      method: "DELETE"
    }).then(response => {
      console.log(this);
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
        console.log(data);
        this.setState({ items: data });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.items.map(item => (
          <Item key={item.id} item={item} deleteItem={this.deleteItem} />
        ))}
      </div>
    );
  }
}
export default ItemsList;
