import React, { useState, useEffect} from 'react';
import '../display_data/Dashboard.css'
import Filter from "../filter/Filter";
import Edit from '../edit/Edit'
import DeleteUser from '../delete/DeleteUser'

function Dashbd(props) {
  let {lst, type} = props;
  const [filtredList , setFiltredList] = useState(null);

  useEffect(() => {
    setFiltredList(lst)
    return () => setFiltredList(null)
  }, [lst])
  console.log(lst)
  console.log(filtredList)

  if (filtredList && filtredList.length === 0)
      return (
        <div className="base-container-db">
        <Filter lst={lst}  setFiltredList={setFiltredList}/>
        <p className="no_data"> Il n'y a pas de médecins dans la base de données</p>
        </div>
      )
  return (
      <div className="base-container-db">
        <Filter lst={lst}  setFiltredList={setFiltredList}/>
        <div className=" tabl-container ">
            <table className="tablo">
                <thead>
                  <tr>
                    <th scope="col">image</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    {/* <th scope="col">Service</th> */}
                    <th scope="col">Numero</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtredList ? filtredList.map((doc,index) =>(
                    <tr key={doc.id}>
                      {/* <td>{doc.id}</td> */}
                      {/* <td><img  class="img-circle tmnal"  src={process.env.PUBLIC_URL + 'recep.png'} alt="Paris"/></td> */}
                      <td><img  class="img-circle tmnal"  src={process.env.PUBLIC_URL + 'tabib.png'} alt="Paris"/></td>
                      {/* <td><img  class="img-circle tmnal"  src={process.env.PUBLIC_URL + 'recepc.png'} alt="Paris"/></td> */}
                      <td>{doc.last_name}</td>
                      <td>{doc.first_name}</td>
                      {/* <td>{doc.speciality}</td> */}
                      <td>{doc.phone}</td>
                      <td><Edit doc={doc} index={index} doc_lst= {filtredList} setDoc_lst={setFiltredList}/></td>
                      <td><DeleteUser doc={doc} doc_lst= {filtredList} setDoc_lst={setFiltredList}/></td>
                    </tr>
                  )) : null}
                </tbody>
              </table>
        </div>
        </div>);
}

export default Dashbd;
