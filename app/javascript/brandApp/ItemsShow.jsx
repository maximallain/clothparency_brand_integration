import React, { Component } from "react";

/*function getItemsFromApiAsync() {
  return fetch("http://localhost:3000/api/v1/items")
    .then(response => response.json())
    .then(responseJson => {
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}

function ItemsShow(props) {
  const items = props.items;
  const listItems = items.map(item => <li key={item.id}>{item.name_ref}</li>);
  return <ul>{listItems}</ul>;
}
const itemsFromAPI = getItemsFromApiAsync();
/*[{ id: 1, name_ref: "Jean Bleu" },
{ id: 2, name_ref: "Jean Bleu" },
{ id: 3, name_ref: "Jean Rouge" },
{ id: 4, name_ref: "Jean Jaune" },
{ id: 5, name_ref: "Jean Vert" }
];*/

//<ItemsShow items={itemsFromAPI} />;

class ItemsShow extends Component {
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
          return <li key={item.id}>{item.name_ref}</li>;
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

export default ItemsShow;
