import React from "react";
import Data from "../../data.json";
import Caroussel from "../.././components/Caroussel/Caroussel";
import { useParams } from "react-router-dom";

export default function Location() {
  const { id } = useParams();
  const descriptionLocation = Data.find((location) => location.id);
  if (descriptionLocation !== undefined) {
  } else {
    window.location.href = "/404";
  }
  return (
    <div>
      <Caroussel />
    </div>
  );
}
