import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Accueil from "./Accueil";
import Filter from "./Filter";
import { within } from "@testing-library/react";


const http = require('../../http')

function getDocLst(setDoc_lst)
{
    let doc = null
    http('GET', 'https://idbella.herokuapp.com/api/doctors', {}, (code, value)=>{
        if (code === 200)
        {
            doc = JSON.parse(value)
            setDoc_lst(doc)   
        }        
    })
}

function Dashbd() {
  const [doc_lst, setDoc_lst] = useState(null);
  useEffect(() => {
    getDocLst(setDoc_lst)
  }, [])

  console.log(doc_lst)
  return (<div className="base-container-db" >
      <Filter/>
     
        <div className=" tabl-container ">
            <table className="tablo">
                <thead>
                  <tr>
                    <th scope="col">image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Service</th>
                    <th scope="col">Numero</th>
                    <th scope="col">Editer</th>
                    <th scope="col">Supprimer</th>
                  </tr>
                </thead>
                <tbody>
                  {doc_lst.map(doc =>(
                    <tr>
                      <td>{doc.id}</td>
                      <td>{doc.last_name}</td>
                      <td>{doc.first_name}</td>
                      <td>{doc.speciality}</td>
                  <td>{doc.phone}</td>
                      <td>editiniiii</td>
                      <td><i className="far fa-trash-alt"></i></td>
                    </tr>
                  ))}
                </tbody>
              </table>
</div>
        </div>);
}

export default Dashbd;
