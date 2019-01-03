import React, { Component } from "react";
import Item from "./Item";

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    //this.deleteItem = deleteItem;
  }

  /*deleteHandler(i, e) {
    e.preventDefault();
    this.props.onDelete(this.props.items);
  }*/

  /*deleteItem(id) {
    fetch("http://localhost:3000/api/v1/items/" + id, {
      method: "DELETE"
    });
  }*/

  componentWillMount() {
    fetch("http://localhost:3000/api/v1/items")
      .then(response => response.json())
      .then(data => {
        let items = data.map(item => {
          return (
            <Item key={item.id} item={item} deleteItem={this.deleteItem} />
          );
        });
        this.setState({ items: items });
      }); /*.catch(error => {
        console.error(error);
      });*/
  }

  render() {
    //console.log(this.deleteItem);
    return <ul>{this.state.items}</ul>;
  }
}

export default ItemsList;
