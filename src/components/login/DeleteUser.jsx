import React from 'react'


const handleDelete = (doc, doc_lst, setDoc_lst) =>{
    console.log("delte hada " + doc.first_name)
    const new_doc_lst = doc_lst.filter(d => d.id !== doc.id)
    console.log (new_doc_lst)
    setDoc_lst(new_doc_lst)
  }

function DeleteUser(props) {
    return (
        <div>
            <button onClick={() => handleDelete(props.doc, props.doc_lst, props.setDoc_lst)} className="btn btn-danger btn-sm">Supprimer</button>
        </div>
    )
}

export default DeleteUser
