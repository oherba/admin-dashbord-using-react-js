import React from "react";
import './Dashboard.css'
import Loggedin from "./Loggedin";
const http = require('../../http')

function Dashbd() {


  return (<div className="base-container-db" >
        <div className="header-db">
            <div className="navBar">
            <ul className=" line nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Medecin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Infirmier(e)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Receptionist(e)</a>
                </li>
            </ul>
            </div>
            <div className="adminLogo">

            </div>
        </div>
        <div className="filter-container">
            <div className="filter-divs">
              <p className="filter-field">Nom</p>
              <input className="filter-input" type="text"></input>
            </div>
            <div className="filter-divs">
              <p className="filter-field">Nom</p>
              <input className="filter-input" type="text"></input>
            </div>
            <div className="filter-divs">
              <p className="filter-field">Nom</p>
              <input className="filter-input" type="text"></input>
            </div>
            <div className="filter-divs">
            <button className="btn btn-primary filter-btn" type="submit">Filter</button>
            </div>
        </div>
  
        <div className=" tabl-container ">
            <table className="tablo">
                <thead>
                  <tr>
                    <th scope="col">image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Service</th>
                    <th scope="col">Reglage</th>
                    <th scope="col">Editer</th>
                    <th scope="col">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
</div>
        </div>);
}

export default Dashbd;
