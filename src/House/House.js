import React, { Component } from "react";
import OwnerInfo from "./OwnerInfo";
import DetailsComponent from "./DetailsComponent";
import axios from "axios";
import HeaderImage from "./HeaderImage";
export default class House extends Component {
  state = {
    owner: {
      name: "John Doe",
      phone: "122345678"
    },
    house: {
      bedrooms: undefined,
      bathrooms: undefined,
      location: "",
      city: "",
      price: undefined,
      image: undefined
    }
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/house/params/5ccffa5f329bd63ff998ba3f")
      .then(res => {
        const { data } = res;
        this.setState({
          house: {
            bedrooms: data.bedroom,
            bathrooms: data.bathroom,
            location: data.address,
            city: data.city,
            price: data.price,
            image: data.picture
          }
        });
        console.log(data.picture);
      })
      .catch(err => console.log(err));
  }
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
