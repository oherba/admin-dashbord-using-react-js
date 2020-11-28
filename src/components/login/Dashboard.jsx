import React from "react";
import './Dashboard.css'
import Accueil from "./Accueil";
import Filter from "./Filter";


const http = require('../../http')

function Dashbd() {
// getDoctors()
  return (<div className="base-container-db" >
      
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
                    <td>tsiwra</td>
                    <td>toto</td>
                    <td>lee</td>
                    <td>bnaj</td>
                    <td>reglniiii</td>
                    <td>editiniiii</td>
                    <td><i className="far fa-trash-alt"></i></td>
                  </tr>
                </tbody>
              </table>
</div>
        </div>);
}

let x = true;
    


export default Dashbd;
