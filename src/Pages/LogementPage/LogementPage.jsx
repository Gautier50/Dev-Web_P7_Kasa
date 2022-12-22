import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse";
import products from "../../data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../LogementPage/logementPage.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function LogementPage() {
  const { id } = useParams();
  console.log(id);
  const dataLogement = products.find((product) => product.id === id);

  if (dataLogement) {
    // const {
    //   title,
    //   description,
    //   pictures,
    //   tags,
    //   host,
    //   rating,
    //   location,
    //   equipments,
    // } = dataLogement;
    console.log(dataLogement);
    return (
      <div>
        <Header />
        <div className="ficheLogement">
          <Carousel pictures={dataLogement.pictures} />
          <h1 className="titre_logement">{dataLogement?.title}</h1>
          <p className="location_logement">{dataLogement?.location}</p>
          <span className="tags_logement">{dataLogement?.tags}</span>
          <span className="rating_logement">{dataLogement.rating}</span>
          <span classeName="host">
            <span className="host_logement">{dataLogement?.host.name}</span>
            <img
              className="host_logement_img"
              src={dataLogement.host.picture}
              alt="photo_propriétaire"
            />
          </span>
          
            <p className="description">Description</p>
            <Collapse description={dataLogement.description} />
            <p className="equipements">Equipements</p>
            <Collapse equipments={dataLogement.equipments} />
          
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
