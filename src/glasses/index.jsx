import { useState } from "react";
import Header from "./header";
import Model from "./model";
import Glasseslist from "./glasses-list";
import data from "./data.json";

export default function Glasses() {
  const [selectedGlasses, setSelectedGlasses] = useState(data[0].url);
  const [selectedGlassesName, setSelectedGlassesName] = useState(data[0].name);
  const [selectedGlassesDesc, setSelectedGlassesDesc] = useState(data[0].desc);

  const handleSelect = (glass) => {
    setSelectedGlasses(glass.url);
    setSelectedGlassesName(glass.name);
    setSelectedGlassesDesc(glass.desc);
  };

  return (
    <div className="container">
      <Header />
      <div className="model-container">
        <div className="models-row">
          <Model
            image="/images/model.jpg"
            glasses={selectedGlasses}
            name={selectedGlassesName}
            desc={selectedGlassesDesc}
          />
          <div className="model">
            <img src="/images/model.jpg" alt="Model without glasses" />
          </div>
        </div>
      </div>
      <div className="glasses-container">
        <Glasseslist glasses={data} onSelect={handleSelect} />
      </div>
    </div>
  );
}
