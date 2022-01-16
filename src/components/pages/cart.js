import React from 'react';
import Diners from "../cartComponents/Diners";
import Salads from "../cartComponents/Salads";
import Starters from "../cartComponents/Starters";

const Cart = () => {
    const { diners, dinersCounter } = Diners("Obiady");
    const { salads, saladCounter } = Salads("Salatki");
    const { starters, starterCounter } = Starters("Przystawki");
    const counter = dinersCounter + saladCounter + starterCounter;

    if (counter === 0) return <h1>Your Cart is Empty</h1>
    return (
        <div>
            <h1>Your Cart:</h1>
            {diners}
            {salads}
            {starters}
        </div>
    );
};

export default Cart;