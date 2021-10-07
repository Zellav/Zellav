import React from 'react';
import './create.css'

const Create = () => {
    return (
        <div className="create">
            <div className="container">
                <div className="create__content">
                    <div className="create-content__item">
                        <div className="create-item__block">
                            <label htmlFor="title">title</label>
                            <input type="text" id="title" />
                        </div>
                        <div className="create-item__block">
                            <label htmlFor="price">price</label>
                            <input type="text" id="price" />
                        </div>
                        <div className="create-item__block">
                            <label htmlFor="before">before</label>
                            <input type="text" id="before" />
                        </div>
                        <div className="create-item__block">
                            <label htmlFor="expiration">expiration</label>
                            <input type="date" id="expiration" />
                        </div>
                        <div className="create-item__block">
                            <label htmlFor="description">description</label>
                            <textarea name="description" id="description" rows="9"></textarea>
                        </div>
                    </div>
                    <div className="create-content__item">
                        <div className="create-item__img">
                            <label htmlFor="img">upload images</label>
                            <input type="file" id="img" />
                        </div>
                        <div className="create-item__sent">
                            <button type="submit">sent card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;