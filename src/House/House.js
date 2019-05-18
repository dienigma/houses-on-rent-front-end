import React, { Component } from "react";
import OwnerInfo from "./OwnerInfo";
import DetailsComponent from "./DetailsComponent";
export default class House extends Component {
  state = {
    owner: {
      name: "John Doe",
      phone: "123456789"
    },
    house: {
      bedrooms: 2,
      bathrooms: 1,
      location: "Gachibowli",
      city: "Hyderabad"
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-10">
          <DetailsComponent house={this.state.house} />
        </div>
        <div className="col-sm-2">
          <OwnerInfo owner={this.state.owner} />
        </div>
      </div>
    );
  }
}
