import React, { useState, useEffect } from 'react';
import './Accueil.css'
import Cards from '../display_data/Cards'
import '../display_data/Dashboard.css'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import Dashbd from '../display_data/Dashboard'
import Register from '../register/Register'
import Logout from '../logout/Logout.jsx'
const http = require('../../http')

let pathname;

function getClass(page)
{
    console.log("page", page, pathname, page === pathname)
    let itemClass = "nav-link";
    if (page === pathname)
        itemClass += " active"
    return itemClass;
}

function getLst(setNewLst, setLstLen, urlRequest, docLenLst)
{
    let lst = null
    http('GET', urlRequest, {}, (code, value)=>{
        if (code === 200)
        {
            lst = JSON.parse(value)
            setNewLst (lst)
            setLstLen (lst.length);
        }        
    })
}

function Accueil(props) {
    const doc_urlLst = "https://idbella.herokuapp.com/api/doctors"
    const nurses_urlLst = "https://idbella.herokuapp.com/api/nurses"
    const receptionist_lst_url = "https://idbella.herokuapp.com/api/receptionists"

    const [doc_lst, setDoc_lst] = useState(null);
    const [nurse_lst, setNurse_lst] = useState(null);
    const [recep_lst, setRecep_lst] = useState(null);

  
    const [docLenLst , set_docLenLst] = useState(0);
    const [nurseLenLst , set_nurseLenLst] = useState(0);
    const [recepLenLst , set_recepLenLst] = useState(0);
    // const [isLoading , setIsLoading] = useState(true);

     useEffect(() => {
        getLst(setDoc_lst, set_docLenLst, doc_urlLst)
        getLst(setNurse_lst, set_nurseLenLst, nurses_urlLst)
        getLst(setRecep_lst, set_recepLenLst, receptionist_lst_url)
   }, [])
   

  


    return /*isLoading ? <h1>loading...</h1> : */(
       
        <div className="base-container">
            {/* <h1 className="admn">Adminisrateur system</h1>
            <h3 className="logout">Logged in : Web Admin |<span> Logout</span></h3>
            <h4 className="bienvenu">Bienvenu Adminisrateur :</h4> */}
            <div className="header-db">
                <Router>
                    
                    <div className="navBar">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link to="/" className={getClass("/")} href="#" >Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/doctors"className={getClass("/filter")} href="#" >Medecin </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/nurses"className={getClass("/")} href="#" >Infirmier(e) </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/recept"className={getClass("/")} href="#" >Receptionist(e) </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register"className={getClass("/")} href="#" >Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout"className={getClass("/")} href="#" data-target=".bs-example-modal-sm" data-toggle="modal" >Logout</Link>
                            </li>
                        </ul>
                         <Switch>
                            <Route path="/" exact render={(props) => (<Cards {...props}   docs= {docLenLst} nurses={nurseLenLst} receps={recepLenLst} />)}/>
                            <Route path="/doctors" render={(props) => (<Dashbd {...props} lst={doc_lst}  setLst={setDoc_lst} />)}/>
                            <Route path="/nurses" render={(props) => (<Dashbd {...props} lst={nurse_lst}  setLst={setNurse_lst} />)}/>
                            <Route path="/recept" render={(props) => (<Dashbd {...props} lst={recep_lst}  setLst={setRecep_lst} />)}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/logout" component={Logout}/>
                        </Switch>
                    </div>
                </Router>
                <div className="adminLogo">
                    <p className="admn">Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Accueil