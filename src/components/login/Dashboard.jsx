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
