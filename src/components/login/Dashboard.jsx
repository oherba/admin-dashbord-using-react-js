import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import Accueil from "./Accueil";
import Filter from "./Filter";
import { within } from "@testing-library/react";
import Edit from '../Edit'


const http = require('../../http')

function getDocLst(setDoc_lst)
{
    let doc = null
    http('GET', 'https://idbella.herokuapp.com/api/doctors', {}, (code, value)=>{
        if (code === 200)
        {
            doc = JSON.parse(value)
            setDoc_lst(doc)
            // console.log("functionnn "  + doc)
        }        
    })
}

const handleDelete = (doc, doc_lst, setDoc_lst) =>{
  console.log("delte hada " + doc.first_name)
  const new_doc_lst = doc_lst.filter(d => d.id !== doc.id)
  console.log (new_doc_lst)
  setDoc_lst(new_doc_lst)
}

function Dashbd() {
  const [doc_lst, setDoc_lst] = useState(null);
  const [editor, setEditor] = useState(null)
   useEffect(() => {
    getDocLst(setDoc_lst)
   }, [])

  // console.log("zbii " + doc_lst)
  if (doc_lst && doc_lst.length === 0)
      return <p className="no_data"> Il n'y a pas de médecins dans la base de données</p>
  return (
      <div className="base-container-db">
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
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {doc_lst ? doc_lst.map(doc =>(
                    <tr key={doc.id}>
                      <td>{doc.id}</td>
                      <td>{doc.last_name}</td>
                      <td>{doc.first_name}</td>
                      <td>{doc.speciality}</td>
                      <td>{doc.phone}</td>
                      <td><Edit/></td>
                      {/* <td><button onClick={() => setEditor(doc)}>Editer</button></td> */}
                      <td><button onClick={() => handleDelete(doc, doc_lst, setDoc_lst)} className="btn btn-danger btn-sm">Supprimer</button></td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
        </div>
        {editor ? <Edit doc={editor} setEditor={setEditor}/> : null}
        </div>);
}

export default Dashbd;
