import React from 'react'
import './Loggedin.css'


function Loggedin() {
    return (
        <div className="base-container">
            <h1 className="admn">Adminisrateur system</h1>
            <h3 className="logout">Logged in : Web Admin |<span> Logout</span></h3>
            <h4 className="bienvenu">Bienvenu Adminisrateur :</h4>
            <ul className=" line nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Medecin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Infirmier(e)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Receptionist(e)</a>
                </li>
               
            </ul>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <div class="content">
                            <div class="row">
                                <div class="col-xs-5">
                                    <div class="icon-big icon-warning text-center">
                                        <i class="ti-user"></i>
                                    </div>
                                </div>
                                <div className="centered">
                                    <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'medcin.png'} />
                                 </div>
                                <div class="col-xs-7">
                                    <div class="numbers">10
                                        <p><strong>Infirmier(e)</strong></p>										
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
                
                	
            </div>	
        </div>
    )
}

export default Loggedin