import React from 'react'

function Filter() {
    return (
        <div className="filter-container">
          <form className="form-inline">
              <div className="form-group mr-2">
                  <label className="sr-only" htmlFor="inputPassword">Password</label>
                  <input type="text" className="form-control" id="inputPassword" placeholder="Prenom"></input>
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
