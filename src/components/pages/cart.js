import React, {useEffect} from 'react';
import emptyLocalStorage from "../hooks/emptyLocalStorage";
import removeItemFromCart from "../hooks/removeItemFromCart";

const Cart = () => {
    const storage = JSON.parse(localStorage.getItem('cart'))

    function totalValue(storage) {
        return storage.map(v => parseInt(v.price)).reduce((prev, current) => prev + current,0);
    }
    if(storage === null)
        return;
    return (
        <div>
            <h1>Your Cart:</h1>
            {storage.map((item) => {
                return <ol key={item.id}>
                    <h2>{item.title}</h2>
                    <p>
                        {item.price}zł
                    </p>
                </ol>
            })}
            {
                totalValue(storage) === 0 && <h2>Nothing added to cart</h2>
            }

            {totalValue(storage) > 0 &&
                <>
                <h3>Total price: {totalValue(storage)}zł</h3>
                <button  onClick={() =>removeItemFromCart()}>Reset cart</button>
                <button onClick={() => emptyLocalStorage()}>Buy products</button>
                </>
            }

        </div>
    );

};

export default Cart;