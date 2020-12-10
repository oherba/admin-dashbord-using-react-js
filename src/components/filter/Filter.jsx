import React, { useState} from 'react';

const filtreList = (lst,setFiltredList, filtefirstname, filterlastName)=>
{
   
    let new_lst  = lst.filter(elmnt => elmnt["first_name"].toLowerCase().includes(filtefirstname))
    new_lst  = new_lst.filter(elmnt => elmnt["last_name"].toLowerCase().includes(filterlastName))
    console.log(filtefirstname)
    console.log(filterlastName)
    setFiltredList(new_lst)
}

function Filter(props) {
    let {setFiltredList, lst} = props
    let first_name = ""
    let last_name = ""
    // const [first_name, setFirst_name] = useState("")
    // const [last_name, setLastname] = useState("")
    return (
        <div className="filter-container">
          <form className="form-inline">
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputNom">Nom</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Nom" 
                   onChange={(e)=>{ last_name = e.target.value;filtreList (lst,setFiltredList,first_name ,last_name)}}></input>
              </div>
               <div className="form-group mr-2">
               <label className="sr-only" htmlFor="inputPrenom">Prenom</label>
               <input type="text" className="form-control" id="inputPassword" placeholder="Prenom" 
                 onChange={(e)=>{ first_name = e.target.value;filtreList (lst,setFiltredList,first_name,last_name)}}></input>
            </div>
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputService">Service</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Service"></input>
              </div>
              <button type="subSmit" className="btn btn-primary filter-btn">Filter</button>
          </form>
        </div>
    )
}

export default Filter;