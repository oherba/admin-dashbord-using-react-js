import React, { useState } from 'react';

const http = require('../../http')

let receptionists = null

function getrecep()
{
    let recep_nbr
    http('GET', 'https://idbella.herokuapp.com/api/receptionists', {}, (code, value)=>{
        if (code === 200)
        {
            receptionists = JSON.parse(value)
            recep_nbr = receptionists.length
            console.log("west funct " + recep_nbr)
            return  recep_nbr
        }        
    })
    //(receptionists.length)
}

function Cards() {

        // getrecep()
        const [recp_nbr, setRecp_nbr] = useState(getrecep());
        console.log("logzbi  " + getrecep())
        const [doc_nbr, setDoc_nbr] = useState(0);
        const [Nurs_nbr, setNurs_nbr] = useState(0);
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
                                <p className="med_nb">10</p> 	
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
                                <p className="med_nb">10</p> 	
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
                                <p className="med_nb" >{recp_nbr}</p> 	
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