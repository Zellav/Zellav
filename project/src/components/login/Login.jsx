import React, {useContext} from 'react';
import google from '../../images/google-icon.png'
import './login.css'
import {Context} from "../../index";
import firebase from "firebase";

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className="login">
            <div className="login__content">
                <div className="login-content__head">
                    <h2>Log in</h2>
                    <p>log in to manage your store</p>
                </div>
                <div className="login-content__body">
                    <button onClick={login}>
                        <img src={google} alt="google" />
                        <p>log in using google services</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;