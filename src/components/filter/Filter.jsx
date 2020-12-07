import React from 'react'

const filtreList = (inputValue, lst, setFiltredList, filter_with)=>
{
    let new_lst
    console.log(inputValue)
    switch (filter_with)
    {
        case "first_name":
            new_lst  = lst.filter(elmnt => elmnt.first_name.toLowerCase().includes(inputValue.toLowerCase()))
            break;
        case "last_name":
            new_lst  = lst.filter(elmnt => elmnt.last_name.toLowerCase().includes(inputValue.toLowerCase()))
            break;
        case "service":
            new_lst  = lst.filter(elmnt => elmnt.service.toLowerCase().includes(inputValue.toLowerCase()))
            break;
    }
    setFiltredList(new_lst)
}

function Filter(props) {
    let {setFiltredList, lst} = props
    return (
        <div className="filter-container">
          <form className="form-inline">
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPrenom">Prenom</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Prenom" 
                    onChange={(e)=>{filtreList(e.target.value, lst,setFiltredList, "first_name")}}></input>
              </div>
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputNom">Nom</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Nom" 
                   onChange={(e)=>{filtreList(e.target.value, lst,setFiltredList, "last_name")}}></input>
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