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

             <div className="d-board">
                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'medcin.png'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb">10</p> 	
                                <p><strong>Medecin</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'infirmier.png'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb">10</p> 	
                                <p><strong>Infirmier</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'recpetionniste.jpg'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb">10</p> 	
                                <p><strong>Receptionniste</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>
              
            </div>
            
        </div>
    )
}

export default Loggedin