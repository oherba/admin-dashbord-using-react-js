import React from 'react'
import http from '../../http'


const handleDelete = (doc, doc_lst, setDoc_lst) =>{
    const deleteUserUrl = 'https://idbella.herokuapp.com/api/admin/users/' + doc.id
    console.log (deleteUserUrl)
    http('DELETE', deleteUserUrl,null,(status, response) =>{
        if(status === 200)
        {
            // console.log("delte hada " + doc.first_name)
            const new_doc_lst = doc_lst.filter(d => d.id !== doc.id)
            setDoc_lst(new_doc_lst)
            console.log("user deleted succccccccfully")
        }
        if (status === 401)
            console.log("permission denied")
        if (status === 404)
            console.log("user not found")
        })
   
  }

function DeleteUser(props) {
    return (
        <div>
            <button 
                onClick={() => handleDelete(props.doc, props.doc_lst, props.setDoc_lst)} 
                className="btn btn-danger btn-sm">Supprimer
            </button>
        </div>
    )
}

export default DeleteUser
