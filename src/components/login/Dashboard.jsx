import React, { useState, useEffect } from 'react';
import '../login/Dashboard.css'
import Filter from "./Filter";
import Edit from '../edit/Edit'
import DeleteUser from '../delete/DeleteUser'


const http = require('../../http')

function getDocLst(setDoc_lst)
{
    let doc = null
    http('GET', 'https://idbella.herokuapp.com/api/doctors', {}, (code, value)=>{
        if (code === 200)
        {
            doc = JSON.parse(value)
            doc.forEach(doct=>{
              doct.role = 2;
            })
            console.log(doc)
            setDoc_lst(doc)
        }        
    })
}

function Dashbd() {
  const [doc_lst, setDoc_lst] = useState(null);
  const [editor, setEditor] = useState(null)
   useEffect(() => {
    getDocLst(setDoc_lst)
   }, [])

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
                  {doc_lst ? doc_lst.map((doc,index) =>(
                    <tr key={doc.id}>
                      <td>{doc.id}</td>
                      <td>{doc.last_name}</td>
                      <td>{doc.first_name}</td>
                      <td>{doc.speciality}</td>
                      <td>{doc.phone}</td>
                      <td><Edit doc={doc} index={index} doc_lst= {doc_lst} setDoc_lst={setDoc_lst}/></td>
                      <td><DeleteUser doc={doc} doc_lst= {doc_lst} setDoc_lst={setDoc_lst}/></td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
        </div>
        {/* {editor ? <Edit doc={editor} setEditor={setEditor}/> : null} */}
        </div>);
}

export default Dashbd;
