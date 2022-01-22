

function pushToCart(doc){
    const arr = JSON.parse(localStorage.getItem('cart'));
    arr.push(doc)
    localStorage.setItem('cart',JSON.stringify(arr));
    alert("Added to cart")
}

export default pushToCart;