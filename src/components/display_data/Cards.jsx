import React from 'react'

function Cards(props) {
    let {docs, nurses, receps} = props;
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
                                <p className="med_nb">{props.docs}</p> 	
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

                                <p className="med_nb">{nurses}</p> 	
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
                                <p className="med_nb" >{receps}</p> 	
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