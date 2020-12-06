import React from 'react';
import '../display_data/Dashboard.css'
import Filter from "../filter/Filter";
import Edit from '../edit/Edit'
import DeleteUser from '../delete/DeleteUser'

function Dashbd(props) {
  let {lst , setLst} = props;

  if (lst && lst.length === 0)
      return <p className="no_data"> Il n'y a pas de médecins dans la base de données</p>
  return (
      <div className="base-container-db">
        <Filter lst={lst} set_lst={setLst}/>
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
                  {lst ? lst.map((doc,index) =>(
                    <tr key={doc.id}>
                      <td>{doc.id}</td>
                      <td>{doc.last_name}</td>
                      <td>{doc.first_name}</td>
                      <td>{doc.speciality}</td>
                      <td>{doc.phone}</td>
                      <td><Edit doc={doc} index={index} doc_lst= {lst} setDoc_lst={setLst}/></td>
                      <td><DeleteUser doc={doc} doc_lst= {lst} setDoc_lst={setLst}/></td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
        </div>
        </div>);
}

export default Dashbd;
