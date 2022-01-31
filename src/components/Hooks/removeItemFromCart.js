

function removeItemFromCart(){
    localStorage.removeItem('cart');
    window.location.reload(true);
}

export default removeItemFromCart;