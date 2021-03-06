import React, { Component } from 'react'
import "./RegisterResponse.css"
import $ from 'jquery'; 


class RegisterResponse extends Component{
    componentDidMount(){
        $('.button').click(function(){
            var buttonId = $(this).attr('id');
            $('#modal-container').removeAttr('class').addClass(buttonId);
            $('body').addClass('modal-active');
          })
          
          $('#modal-container').click(function(){
            $(this).addClass('out');
            $('body').removeClass('modal-active');
          });
      }
   render()
   {
    return (
        <div>
            <div id="modal-container">
                <div className="modal-background">
                    <div className="modal">
                        <h2>I'm a Modal</h2>
                        <p>Hear me roar.</p>
                        <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                            <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
                        </svg>
                    </div>
                </div>
            </div>
                <div className="content">
                    <h1>Modal Animations</h1>
                    <div className="buttons">
                        <div id="one" className="button">Unfolding</div>
                        <div id="two" className="button">Revealing</div>
                        <div id="three" className="button">Uncovering</div>
                        <div id="four" className="button">Blow Up</div><br/>
                        <div id="five" className="button">Meep Meep</div>
                        <div id="six" className="button">Sketch</div>
                        <div id="seven" className="button">Bond</div>
                    </div>
                </div>
        </div>
    )
   }
}

export default RegisterResponse