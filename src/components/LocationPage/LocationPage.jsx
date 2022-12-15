import React from 'react'
import { NavLink } from 'react-router-dom'
import '../LocationPage/LocationPage.scss'
// import Rating from '../.././components/Rating/Rating'
// import Collapse from '../Collapse/Collapse'
import data from '../../data.json'


  const LocationPage = () => {

    const { id } = useParams()
    const data = datas.find(data => data.id === id)
    if (data === undefined) { 
        return <section className="error_page">
            <p className="error_page_subtitle">Malheureusement, le logement que vous recherchez n'est plus disponible ou n'existe pas.</p>
            <NavLink title='Accueil' end to='/home' className="error_page_link">Retourner sur la page d'accueil</NavLink> 
        </section>
    }
  return (
    <div>LocationPage</div>
  )
}
export default function LocationPage;