import React, {useContext} from 'react';
import './navbar.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../utils/path';
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar-content__left">
                        <div className="navbar-content__logo">
                            <img src={logo} alt={"logo"} />
                        </div>
                        <ul className="navbar-content__menu">
                            <li>
                                <NavLink to="/home">home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home">product</NavLink>
                            </li>
                            <li>
                                <NavLink to="/home">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-content__profile">
                        {user ?
                            <button className="navbar__btn-out" onClick={() => auth.signOut()}>Log out</button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <button>Log in</button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
