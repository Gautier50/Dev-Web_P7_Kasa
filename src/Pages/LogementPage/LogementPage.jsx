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
    const {
      title,
      description,
      pictures,
      tags,
      host,
      rating,
      location,
      equipments,
    } = dataLogement;
    console.log(dataLogement);
    return (
      <div>
        <Header />
        <div className="ficheLogement">
          {/* <Carousel pictures={dataLogement.pictures} key={id} /> */}
          <Carousel slides={pictures} />
          <h1 className="titre_logement">{dataLogement?.title}</h1>
          <p className="location_logement">{dataLogement?.location}</p>
          <div className="tags_logement">
            {dataLogement.tags.map((tag, index) => (
              <Tag key={index} getTag={tag} />
            ))}
          </div>

          <div className="host">
            <Rating rating={rating} />
            <div className="host_profile">
              <span className="host_logement_name">
                {dataLogement?.host.name}
              </span>
              <img
                className="host_logement_img"
                src={dataLogement.host.picture}
                alt="photo_propriétaire"
              />
            </div>
          </div>
          <div className="dropdowns_logement">
            <p className="description">Description</p>
            <Collapse title="description" content={description} />
            <ul className="equipements">Equipements</ul>
            <Collapse title="équipement" content={equipments} />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  } else {
    window.location.href = "/404";
  }
}
