import React from "react";
import "./detailsComponent.css";
import HeaderImage from "./HeaderImage";
export default function DetailsComponent(props) {
  const { house } = props;
  return (
    <div className="details">
      <HeaderImage />
      <h1>Rent: &#8377; {house.price}</h1>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Baths: {house.bathrooms}</p>
      <p>Location: {house.location}</p>
      <p>City: {house.city}</p>
    </div>
  );
}
