import React from 'react'
const http = require('../http')

const handleLogout = () => {
    http('DELETE', 'https://idbella.herokuapp.com/api/logout', {}, (code, value)=>{
        if (code === 200)
        {
            console.log ("valueeee" + value)
            window.location = '/'
        }        
    })
}

function Logout() {
    return (
        <div>
            <div tabIndex="-1" className="modal bs-example-modal-sm" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                     <div className="modal-header"><h4>Logout {/*<i className="fa fa-lock"</h4>></i>*/}</h4></div> 
                    <div className="modal-body">{/*<i className="fa fa-question-circle"></i>*/} Are you sure you want to log-off?</div>
                    <div className="modal-footer">
                        <a className="btn btn-primary btn-block"  onClick={() =>handleLogout()}>Logout</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Logout
