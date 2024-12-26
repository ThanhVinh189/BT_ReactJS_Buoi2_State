import React from "react";

export default function Glasseslist({ glasses, onSelect }) {
  return (
    <div className="glasses-list">
      {glasses.map((glass) => (
        <div
          key={glass.id}
          className="glasses-item"
          onClick={() => onSelect(glass)}
        >
          <img src={glass.url} alt={glass.name} />
          <p>{glass.name}</p>
        </div>
      ))}
    </div>
  );
}
