import './Login.css'
import React, { useState } from 'react';


function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    
    return (
        <div className="base-container">
            <div className="split right ">
                <div className="centered">
                    <img className="image" alt="logo" src={process.env.PUBLIC_URL + 'logo_um6p.jpg'} />
                </div>    
            </div>
            <div className="split  left ">
                <div className= " centered">
                    <div className="header">Administarteur System</div>
                    <div className="label-div">
                        <label className="email" {...username}  htmlFor="username">Email Address</label>
                    </div>
                    <input className="emailInput" type="text" name="username"></input>
                    <div className="label-div">
                        <label  className="password" {...password} htmlFor="password">Password</label>
                    </div>
                    <input className="passwordInput" type="text" name="password" ></input>
                    <div className="checkBox">
                        <input  type="checkbox"  id="checkbox" name="remember"></input>
                        <label htmlFor="checkbox" >Remember me</label>
                    </div>
                    <div className="btn-div">
                        <button  className="sublog" type="button" onClick={handleSubmitClick} >Login</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const validate = e => {
    
  }



const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
  
  const handleSubmitClick = (e) => {
    e.preventDefault();
        console.log("anan banana");
        validate();
        // sendDetailsToServer()    
}
export default Login