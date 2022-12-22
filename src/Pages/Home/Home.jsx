import React from "react"
import Cards from "../../components/Card/Card"
import Data from "../../data.json"
import { Link } from "react-router-dom"
import './Home.css'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../../src/components/Banner/Banner"

export default function Home() {
  return (
    <main>
      <Header />
      <Banner/>
      <div id="Hebergements">
        {Data.map((cards) => (
          <Link
            className="HebergementsLink"
            key={`${cards.id}`}
            to={`/location/${cards.id}`}
          >
            <Cards
              key={`${cards.id}`}
              cover={cards.cover}
              title={cards.title}
            />
          </Link>
        ))}
      </div>
      <Footer/>
    </main>
  );
}
