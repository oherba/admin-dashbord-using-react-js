
import './App.css';
import Login from './components/login/Login.jsx';
import Accueil from './components/home/Accueil.jsx';
// import Registerresponse from './components/register/RegisterResponse.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
    return (
      // <Edit></Edit>
      // <Registerresponse/>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Login}/>
          <Route path={"/home"} component={Accueil}/>
        </Switch>
      </BrowserRouter>
    );
}

export default App;


