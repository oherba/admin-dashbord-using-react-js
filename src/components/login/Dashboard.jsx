import React from "react";
import './Dashboard.css'
import Loggedin from "./Loggedin";

function Dashbd() {
  return (<div >
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
        <Loggedin></Loggedin>
        {/* <div className=" tabl-container ">
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
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
</div> */}
        </div>);
}

export default Dashbd;
