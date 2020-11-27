import React from 'react'
import './Accueil.css'
import Cards from './Cards'
import Login from './Login'
import './Dashboard.css'


import Filter from './Filter'
import Dashbd from './Dashboard'

let pathname;

function getClass(page)
{
    // pathname = useLocation().pathname;
    console.log("page", page, pathname, page == pathname)
    let itemClass = "nav-link";
    if (page == pathname)
        itemClass += " active"
    return itemClass;
}

function Accueil(props) {
    // pathname = useLocation().pathname;
    return (
        <div className="base-container">
            {/* <h1 className="admn">Adminisrateur system</h1>
            <h3 className="logout">Logged in : Web Admin |<span> Logout</span></h3>
            <h4 className="bienvenu">Bienvenu Adminisrateur :</h4> */}
            <div className="header-db">
                {/* <Router>
                    <div className="navBar">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link to="/" className={getClass("/")} href="#" >Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/filter"className={getClass("/filter")} href="#" >Medecin </Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/filter"className={getClass("/")} href="#" >Infirmier(e) </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/filter"className={getClass("/")} href="#" >Receptionist(e) </Link>
                            </li>
                        </ul>
                         <Switch>
                            <Route path="/" exact component={Cards}/>
                            <Route path="/filter" component={Filter}/>
                            <Route path="/filter" component={Filter}/>
                            <Route path="/filter" component={Filter}/>
                        </Switch> *
                    </div>
                </Router> */}
                <div className="adminLogo">
                    <p className="admn">Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Accueil