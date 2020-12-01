import React from 'react'
import './Accueil.css'
import Cards from './Cards'
import Login from './Login'
import './Dashboard.css'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import Filter from './Filter'
import Dashbd from './Dashboard'
import Register from './Register'
import Logout from '../Logout'

let pathname;

function getClass(page)
{
    console.log("page", page, pathname, page == pathname)
    let itemClass = "nav-link";
    if (page == pathname)
        itemClass += " active"
    return itemClass;
}

function Accueil(props) {
    return (
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
                            <Route path="/" exact component={Cards}/>
                            <Route path="/doctors" component={Dashbd}/>
                            <Route path="/nurses" component={Dashbd}/>
                            <Route path="/recept" component={Dashbd}/>
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