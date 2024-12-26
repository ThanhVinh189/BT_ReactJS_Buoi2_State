import React from "react";

export default function Model({ image, glasses, name, desc }) {
  return (
    <div className="model">
      <img
        src={image || "/images/model.jpg"}
        alt="Model"
        className="model-img"
      />
      {glasses && (
        <>
          <img src={glasses} alt="Selected Glasses" className="glasses" />
          <div className="model-info">
            <h3 className="model-name">{name}</h3>
            <p className="model-desc">{desc}</p>
          </div>
        </>
      )}
    </div>
  );
}
