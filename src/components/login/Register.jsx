import React from 'react'
import './Register.css'

function Register() {
    return (
            <div className="bod">
                    <form className="formati">
                        <h3>Créer un compte</h3>
        
                        <div className="form-group">
                            <label>Nom</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className="form-group">
                            <label>Prenom</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label>Numero</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label>Service</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
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