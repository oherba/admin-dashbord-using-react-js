import './Login.css'
import React, { useState } from 'react';
import axios from 'axios';


function Login(props) {


    const sendDetailsToServer = () => {
        if({email} && {password}) {
            props.showError(null);
            const payload={
                "email":{email},
                "password":{password},
            }
        //     axios.post(API_BASE_URL+'/user/register', payload)
        //         .then(function (response) {
        //             if(response.status === 200){
        //                 setState(prevState => ({
        //                     ...prevState,
        //                     'successMessage' : 'Registration successful. Redirecting to home page..'
        //                 }))
        //                 localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
        //                 redirectToHome();
        //                 props.showError(null)
        //             } else{
        //                 props.showError("Some error ocurred");
        //             }
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });    
        // } else {
        //     props.showError('Please enter valid email and password')    
         }   
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
            console.log("email is" + {email} + "      ");
            console.log("pasword is" + {password} + "      ");
            validate();
            // sendDetailsToServer()    
    }

    const email = useFormInput('');
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
                        <label className="email"   htmlFor="email" value={email}>Email Address</label>
                    </div>
                    <input className="emailInput" type="text" name="email"></input>
                    <div className="label-div">
                        <label  className="password" htmlFor="password">Password</label>
                    </div>
                    <input className="passwordInput" type="text" name="password" value={password} ></input>
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
// }





}
export default Login