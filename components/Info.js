import React from "react"
import ReactDOM from "react-dom"

export default function Info (){
    return(
        <div className="info-div">
            <img className="info-img" src="./images/me.jpg"/>
            <h2 className="info-name"> 
            Orne Virardi
            </h2>
            <h4 className="info-profession">
            Frontend Developer
            </h4>
            <div className="btn-container">
            <button className="email-btn">
            Email
            </button>
            <button className="linkedin-btn">
            Linkedin
            </button>  
            </div>          
        </div>
    )
}
