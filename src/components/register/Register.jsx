import React from 'react'
import './Register.css'
import { useForm } from "react-hook-form";
import http from '../../http';

function Register() {
    const {register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const registerUrl = 'https://idbella.herokuapp.com/api/register'
        http('POST',registerUrl, data, (status, response) =>{
            if (status === 401)
                console.log("permission denied")
            if (status === 300)
                console.log("email already exist")
            if (status === 200)
                console.log("registred succesfully")
            })
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
                            <input name="phone" type="tel" id="phone"  className="form-control" placeholder="phone number" ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Service</label>
                            <select name="role" className="form-control" placeholder="role"  ref={register({required : true})} >
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Nurse</option>
                                {/* <option value="4">patient</option> */}
                                <option value="5">Receptionist</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Enter email"  ref={register({required : true})}/>
                        </div>
                        <div className="form-group">
                            <label>Mot de passe</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter password"  ref={register({required : true})} />
                        </div>
        
                        {/* <button type="submit" className="btn btn-dark btn-lg btn-block">Ajouter</button> */}
                        {/* <div> */}
            <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" >Ajouter</button>
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content kikaaa">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                    {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close"> */}
                    {/* <span aria-hidden="true">&times;</span>
                    </button> */}
                </div>
                <div className="modal-body">
                <br />
                  User registered successfully
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div> */}
                </div>
            </div>
            </div>
         {/* </div> */}
                    </form>
            </div>
                );
}

export default Register