import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      showDetails: false
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.state.showDetails) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  }

  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }

  _renderSubComp() {
    switch (this.state.render) {
      case "chockers":
        return <Chokers />;
      case "bracelets":
        return <Bracelets />;
      case "rings":
        return <FRings />;
    }
  }

  render() {
    return (
      <div className="item" onClick={this.onClick}>
        <h2>{this.state.item.name_ref}</h2>
        {this.state.showDetails ? (
          <div className="details">id : {this.state.item.id}</div>
        ) : null}
      </div>
    );
  }
}

export default Item;
