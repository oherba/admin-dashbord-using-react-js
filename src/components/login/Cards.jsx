import React, { useState } from 'react';

const http = require('../../http')

function getrecep(setRecp_nbr)
{
    let receptionists = null
    http('GET', 'https://idbella.herokuapp.com/api/receptionists', {}, (code, value)=>{
        if (code === 200)
        {
            receptionists = JSON.parse(value)
            setRecp_nbr (receptionists.length)   
        }        
    })
}

function getDoc(setDoc_nbr)
{
    let receptionists = null
    http('GET', 'https://idbella.herokuapp.com/api/doctors', {}, (code, value)=>{
        if (code === 200)
        {
            receptionists = JSON.parse(value)
            setDoc_nbr (receptionists.length)   
        }        
    })
}

function getNurs(setNurs_nbr)
{
    let receptionists = null
    http('GET', 'https://idbella.herokuapp.com/api/nurses', {}, (code, value)=>{
        if (code === 200)
        {
            receptionists = JSON.parse(value)
            setNurs_nbr (receptionists.length)   
        }        
    })
}

function Cards() {
        const [recep_nbr, setRecp_nbr] = useState(0);
        getrecep(setRecp_nbr)
        const [doc_nbr, setDoc_nbr] = useState(0);
        getDoc(setDoc_nbr)
        const [Nurs_nbr, setNurs_nbr] = useState(0);
        // getNurs(setNurs_nbr)
    return (
        <div>
            <div className="d-board">
                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'medcin.png'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb">{doc_nbr}</p> 	
                                <p><strong>Medecin</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'infirmier.png'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb">{Nurs_nbr}</p> 	
                                <p><strong>Infirmier</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="b_row">
                    <div className="b_card">
                        <div className="top_card">
                            <div className="med_img">
                                 <img className="medcin" alt="medcin" src={process.env.PUBLIC_URL + 'recpetionniste.jpg'} />
                            </div>
                            <div className="med_info">
                                <p className="med_nb" >{ recep_nbr}</p> 	
                                <p><strong>Receptionniste</strong> </p> 							
                            </div>
                        </div>
                        <div className="bottom_card">
                            <button>
                                <span> &#8594;</span>
                                <p>VOIR</p>
                            </button>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Cards;