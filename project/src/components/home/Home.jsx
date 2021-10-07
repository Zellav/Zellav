import React from 'react';
import './home.css';
import Item from '../item/item'

const arr = [
    {
        expiration : "25",
        img: "https://i.pinimg.com/originals/3e/72/8e/3e728e7f50b35900390cf76e9cbc4c07.jpg",
        title: "one product",
        description: "there may be a description of the product. You can add a description from your personal account",
        price: "25",
        before: "45",
    },
    {
        expiration : "25",
        img: "https://i.pinimg.com/originals/3e/72/8e/3e728e7f50b35900390cf76e9cbc4c07.jpg",
        title: "two product",
        description: "there may be a description of the product. You can add a description from your personal account",
        price: "25",
        before: "45",
    },
    {
        expiration : "25",
        img: "https://i.pinimg.com/originals/3e/72/8e/3e728e7f50b35900390cf76e9cbc4c07.jpg",
        title: "three product",
        description: "there may be a description of the product. You can add a description from your personal account",
        price: "25",
        before: "45",
    },
    {
        expiration : "25",
        img: "https://i.pinimg.com/originals/3e/72/8e/3e728e7f50b35900390cf76e9cbc4c07.jpg",
        title: "four product",
        description: "there may be a description of the product. You can add a description from your personal account",
        price: "25",
        before: "45",
    },
]

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="home__content">
                    {arr.map((obj) => (
                        <Item
                            head={obj.expiration}
                            img={obj.img}
                            title={obj.title}
                            description={obj.description}
                            price={obj.price}
                            before={obj.before}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;