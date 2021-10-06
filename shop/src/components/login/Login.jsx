import React from 'react';
import google from '../../images/google-icon.png'
import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login__content">
                <div className="login-content__head">
                    <h2>Log in</h2>
                    <p>log in to manage your store</p>
                </div>
                <div className="login-content__body">
                    <button>
                        <img src={google} alt="google" />
                        <p>log in using google services</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;