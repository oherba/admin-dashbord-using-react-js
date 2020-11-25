import React from "react";
import './Dashboard.css'
import Loggedin from "./Loggedin";
const http = require('../../http')

function Dashbd() {
getDoctors()

  return (<div className="base-container-db" >
        <div className="header-db">
            <div className="navBar">
            <ul className="nav nav-pills">
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
                <p className="admn">Admin</p>
            </div>
        </div>
        <div className="filter-container">
          <form className="form-inline">
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Prenom"></input>
              </div>
              <div className="form-group mr-2">
                  <label className="sr-only" for="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Nom"></input>
              </div>
              <div className="form-group mr-2">
                  <label className="sr-only" for="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Service"></input>
              </div>
              <button type="submit" className="btn btn-primary filter-btn">Filter</button>
          </form>
        </div>
                {/* <div className="filter-container">
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
        </div> */}
  
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
function getDoctors(){
  if (!x)
    return ;
  x=false;
  http('POST', 'https://idbella.herokuapp.com/api/login', {email:'modir',password:'admin'}, (status, response)=>{
    console.log('login status : ' + status + ' : ' + response);
    http('GET', 'https://idbella.herokuapp.com/api/doctors', {}, (status, response)=>{
      console.log('list status : ' + status + ' : ' + response);
      //var l = JSON.parse(response);
      console.log(response);
    })
  })
}


export default Dashbd;
