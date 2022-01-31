

function removeItemFromCart(){
    localStorage.removeItem('cart');
    window.location.reload();
}

export default removeItemFromCart;