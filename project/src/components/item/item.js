import React from 'react';
import './item.css'

const item = (props) => {
    return (
        <div className="home-content__item">
            <div className="home-item__head">
                <p>SALE {props.expiration} day</p>
            </div>
            <div className="home-item__images">
                <img src={props.img} alt="" />
            </div>
            <div className="home-item__body">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="head-item__footer">
                <p className="home-footer__price">${props.price}</p>
                <p className="home-footer__before-price">${props.before}</p>
            </div>
        </div>
    );
};

export default item;