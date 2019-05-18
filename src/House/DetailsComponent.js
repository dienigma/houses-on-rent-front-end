import React from "react";
import "./detailsComponent.css";
export default function DetailsComponent(props) {
  const { house } = props;
  return (
    <div className="details">
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Baths: {house.bathrooms}</p>
      <p>Location: {house.location}</p>
      <p>Cirty: {house.city}</p>
    </div>
  );
}
