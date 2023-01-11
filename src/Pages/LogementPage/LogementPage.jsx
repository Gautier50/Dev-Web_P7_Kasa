import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import products from "../../data.json";
import Carousel from "../../components/Carousel/Carousel";

import "../LogementPage/logementPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";

export default function LogementPage() {
  const { id } = useParams();
  console.log(id);
  const dataLogement = products.find((product) => product.id === id);

  if (dataLogement) {
    const { title, description, pictures, host, rating, location, equipments } =
      dataLogement;
    console.log(dataLogement);
    return (
      <div>
        <Header />
        <Carousel pictures={pictures} />

        <div className="ficheLogement">
          <h1 className="titre_logement">{title}</h1>
          <p className="location_logement">{location}</p>
          <div className="tags_logement">
            {dataLogement.tags.map((tag, index) => (
              <Tag key={index} getTag={tag} />
            ))}
          </div>
          <div className="host">
            <div className="host_profile">
              <span className="host_logement_name">{host.name}</span>
              <img
                className="host_logement_img"
                src={host.picture}
                alt="photo_propriétaire"
              />
            </div>
          </div>
          <Rating className="stars" rating={rating} />
        </div>
        <Collapse description={description} equipments={equipments} />
        <div>
          <Footer />
        </div>
      </div>
    );
  } else {
    window.location.href = "/404";
  }
}
