import React from 'react'
import './Loggedin.css'


function Loggedin() {
    return (
        <div className="base-container">
            <h1 className="admn">Adminisrateur system</h1>
            <h3 className="logout">Logged in : Web Admin |<span> Logout</span></h3>
            <h4 className="bienvenu">Bienvenu Adminisrateur :</h4>
            <ul className=" line nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Accueil</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Medecin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Infirmier(e)</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Receptionist(e)</a>
                </li>
               
            </ul>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="card">
                        <div className="child-1">
                            <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'medcin.png'} />
                        </div>
                            <div className="col-xs-7">
                              <p>10 <br/><strong>Medecin</strong> </p>	
                            								
                            </div>
                            <hr></hr>
                        </div>
                    
                </div>    	
            </div>	

            
        </div>
    )
}

export default Loggedin