import React from "react";
import "./ownerInfo.css";
export default function OwnerInfo(props) {
  const { owner } = props;
  return (
    <div className="card bg-dark mb-3">
      <div className="card-body">
        <h5 className="card-title">Name : {owner.name}</h5>
        <p className="card-text">Phone : {owner.phone}</p>
      </div>
    </div>
  );
}
