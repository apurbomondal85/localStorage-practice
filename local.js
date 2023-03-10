

const productSetAndDisplay = () =>{
    const product = document.getElementById('productField');
    const quantity = document.getElementById('quantityField');
    const productValue = product.value;
    const quantityValue = quantity.value;
    product.value = '';
    quantity.value = '';
    displayProduct(productValue,quantityValue);
    saveProductDataOnLocalStorage(productValue,quantityValue);
}

const displayProduct = (product,quantity) =>{
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} ${quantity}`;
    productContainer.appendChild(li);
}

const getLocalStorageData = () =>{
    let cart = {};
    const getStorageData = localStorage.getItem('cart');
    if (getStorageData) {
        cart = JSON.parse(getStorageData);
    }
    return cart;
}

const saveProductDataOnLocalStorage = (product,quantity) => {
    const cart = getLocalStorageData();
    cart[product] = quantity;
    const getCartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", getCartStringify);
}


const displayLocalStorageData = () =>{
    const cart = getLocalStorageData();
    for (const product in cart) {
        const quantity = cart[product];
        displayProduct(product,quantity);
    }
}

window.onload = () =>{
    displayLocalStorageData();
}
