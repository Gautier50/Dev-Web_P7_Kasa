import React from "react"
import Cards from "../../components/Cards/Cards"
import Data from "../../data.json"
import { Link } from "react-router-dom"
import './Home.module.scss'

export default function Home() {
  return (
    <main>
      <div id="Hebergements">
        {Data.map((cards) => (
          <Link
            className="HebergementsLink"
            key={`${cards.id}`}
            to={`/Location/${cards.id}`}
          >
            <Cards
              key={`${cards.id}`}
              cover={cards.cover}
              title={cards.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
