import React from 'react'
import './Register.css'
import { useForm } from "react-hook-form";
import http from '../../http';

function Register() {
    const {register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const registerUrl = 'https://idbella.herokuapp.com/api/register'
        http('POST',registerUrl, data, (status, response) =>{
            if (status === 503)
                console.log("zbiii la registriti")
            console.log("zbi" + response)
        })
        // console.log( data)
    }
    return (
            <div className="bod">
                    <form className="formati" onSubmit={handleSubmit(onSubmit)}>
                        <h3>Créer un compte</h3>
        
                        <div className="form-group">
                            <label>Nom</label>
                            <input name="last_name" type="text" className="form-control" placeholder="First name" ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Prenom</label>
                            <input name="first_name" type="text" className="form-control" placeholder="Last name" ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Numero</label>
                            <input name="phone" type="tel" id="phone" name="phone"  className="form-control" placeholder="phone number" ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Service</label>
                            <input name="role"  type="number" className="form-control" placeholder="role"  ref={register({required : true})}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Enter email"  ref={register({required : true})}/>
                        </div>
                        <div className="form-group">
                            <label>Mot de passe</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Ajouter</button>
                    </form>
            </div>
                );
}

export default Register