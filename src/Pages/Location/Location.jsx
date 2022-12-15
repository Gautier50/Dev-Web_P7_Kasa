import React from "react";
import { useParams } from "react-router-dom";
import Data from "../../data.json";
// import LocationPage from "../../components/LocationPage/LocationPage";
import Caroussel from "../../components/Caroussel/Caroussel";
import Collapse from "../../../src/components/Collapse/Collapse";

const Location = () => {
  const { locationId } = useParams();
  const oneLocation = location.find((location) => location.id === locationId);
  const { title, location, rating, host, equipments, description, pictures } =
    location;
  return (
    <div className="singlelocation">
      <Caroussel />

      <div className="singlelocation_chevron_down">
        <Collapse title="description" content={description} />
        <Collapse title="équipement" content={equipments} />
      </div>
    </div>
  );
};
export default Location;
