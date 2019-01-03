import React, { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }


  componentWillMount() {
    fetch("http://localhost:3000/api/v1/items")
      .then(response => response.json())
      .then(data => {
        let items = data.map(item => {
          return <Item key={item.id} item={item} />;
        });
        this.setState({ items: items });
      }); /*.catch(error => {
        console.error(error);
      });*/
  }

  render() {
    return <ul>{this.state.items}</ul>;
  }
}

export default ItemsList;
