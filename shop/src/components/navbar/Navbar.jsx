import React from 'react';
import './navbar.css'
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../../utils/path';

const Navbar = () => {
    const user = true
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
                                <Link to="/home">home</Link>
                            </li>
                            <li>
                                <Link to="/home">product</Link>
                            </li>
                            <li>
                                <Link to="/home">contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-content__profile">
                        {user ?
                            <button>Log in</button>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                <button>Log out</button>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
