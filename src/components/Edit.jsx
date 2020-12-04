import "./Edit.css"
import { useForm } from "react-hook-form";
import http from '../http';



function Edit(props) {
    let {doc, index, setDoc_lst, doc_lst} = props;
    const {register, handleSubmit } = useForm();
    const onSubmit = data =>{
        if (data.email == doc.email)
            delete data.email
        const updateUrl = 'https://idbella.herokuapp.com/api/admin/users/' + doc.id
        console.log(updateUrl)
        http('POST',updateUrl, data, (status, response) =>{
            if (status === 503)
                console.log("error server")
            if(status === 200)
            {
                const new_doc_lst =props.doc_lst;
                new_doc_lst[index] = data;
                console.log(new_doc_lst)
                setDoc_lst(new_doc_lst);
                console.log(doc_lst)
                console.log ("edited succ")
            }  
            if(status === 404)
                console.log ("not found") 
        });
       
    }
    const getId = id => `#${id}`;
    console.log("i" + props.index)

    return (
        
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={getId(doc.first_name)}>Edit</button>
            <div className="modal fade" id={doc.first_name} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit profile</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form className="formati" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nom</label>
                            <input name="last_name" type="text" className="form-control" placeholder="First name" defaultValue={doc.last_name} ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Prenom</label>
                            <input name="first_name" type="text" className="form-control" placeholder="Last name" defaultValue={doc.first_name} ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Numero</label>
                            <input name="phone" type="tel" id="phone"  className="form-control" placeholder="phone number" defaultValue={doc.phone} ref={register({required : true})} />
                        </div>
                        <div className="form-group">
                            <label>Service</label>
                            <select name="role" className="form-control" placeholder="role"  ref={register({required : true})} defaultValue={doc.role}>
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Nurse</option>
                                <option value="4">patient</option>
                                <option value="5">Receptionist</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="email" className="form-control" placeholder="Enter email"  defaultValue={doc.email} ref={register({required : true})}/>
                        </div>
                        <div className="form-group">
                            <label>Mot de passe</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter password"  defaultValue={doc.password} ref={register({required : true})} />
                        </div>
        
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Update</button>
                    </form>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-dark btn-lg btn-block" data-dismiss="modal">close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Edit