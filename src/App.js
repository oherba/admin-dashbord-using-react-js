
import './App.css';
import Login from './components/login/Login.jsx';
import Accueil from './components/login/Accueil.jsx';
import Dashboard from './components/login/Dashboard';
import Dashbd from './components/login/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Register from './components/login/Register';

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Login}/>
          <Route path={"/home"} component={Accueil}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;


