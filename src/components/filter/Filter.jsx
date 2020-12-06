import React from 'react'

const prenomFilter = (inputValue, lst, set_lst)=>
{
    let new_lst
    console.log(inputValue)
    console.log(lst)
    console.log(set_lst)
    new_lst  = lst.filter(elmnt => elmnt.includes('j'))
    console.log(new_lst)
}

function Filter(props) {
    let {lst, set_lst} = props
    // console.log(lst)
    // console.log(set_lst)
    return (
        <div className="filter-container">
          <form className="form-inline">
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Prenom" onChange={(e)=>{prenomFilter(e.target.value, lst, set_lst)}}></input>
              </div>
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Nom"></input>
              </div>
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Service"></input>
              </div>
              <button type="submit" className="btn btn-primary filter-btn">Filter</button>
          </form>
        </div>
    )
}

export default Filter;
