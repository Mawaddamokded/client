import React, { useState } from 'react'
import "../../assets/styles/Ins.css"

function Inscription() {
    const [btns, setBtns] = useState([
        {   id:1,
            isclick:true,
        },
        {    id:2,
            isclick:false,
        },])
    
    const handelClick=(ids)=>{
            setBtns(btns.map((todo)=>({...todo ,isclick:!todo.isclick})))
            
        };
          
    
    const colorchange=(ids)=>{
        btns.map((todo)=>(todo.id===ids&&todo.isclick?
            container.classList.remove("right-panel-active")
            :container.classList.add("right-panel-active")))
    }
    const container = document.getElementById('container1');
    return (
        <div style={{ textAlign: "center" }} className="inscr">
            <h3 className="insch1">Connecter vous</h3>
            <div className="container1" id="container1">
                <div className="form-container1 sign-up-container1">
                    <form action="#">
                        <h1 className="insch1">Créer un compte </h1>
                        <div className="social-container1">
                            <a href="#a" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#b" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#c" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span className="inspan">ou utilisez votre email pour vous inscrire </span>
                        <input className="input1" type="text" placeholder="Nom" />
                        <input className="input1" type="email" placeholder="Email" />
                        <input className="input1" type="password" placeholder="Mot de passe" />
                        <button className="button1">S'inscrire</button>
                    </form>
                </div>
                <div className="form-container1 sign-in-container1">
                    <form action="#">
                        <h1>S'identifier</h1>
                        <div className="social-container1">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span className="inspan">ou utilisez votre compte</span>
                        <input className="input1" type="email" placeholder="Email" />
                        <input className="input1" type="password" placeholder="Mot de passe" />
                        <a href="#">Mot de passe oublié?</a>
                        <button className="button1">S'identifier</button>
                    </form>
                </div>
                <div className="overlay1-container1">
                    <div className="overlay1">
                        <div className="overlay1-panel overlay1-left">
                            <h1>Bienvenue!</h1>
                            <p>Pour rester connecté avec nous, veuillez vous connecter avec vos informations personnelles </p>
                            <button className="button1 ghost" id="signIp" onClick={() => handelClick()+colorchange(2)} > S'identifier</button>
                        </div>
                        <div className="overlay1-panel overlay1-right">
                            <h1>Salut!</h1>
                            <p>Entrez vos informations personnelles </p>
                            <button  className="button1 ghost" id="signUp" onClick={() => handelClick()+colorchange(1)}>S'inscrire</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    );
    }


export default Inscription