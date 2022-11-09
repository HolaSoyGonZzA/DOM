const $productForm = document.forms["product-form"]

const $product = document.querySelector('#product')
const $price = document.querySelector('#price')
const $quantity = document.querySelector('#quantity')

const $cart = document.getElementById('cart')

let cart = [{
    id: Date.now(),
    product: 'Hola',
    price: 5,
    quantity: 2
}]

printCart(cart)

$productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const product = {
        id: Date.now(),
        product: $product.value,
        price: $price.value,
        quantity: $quantity.value,
    }
    cart.unshift(product);
    printCart(cart)
})

function printCart(cart) {
    $cart.innerHTML = ''
    cart.forEach(el => {
        $cart.innerHTML += `<li id="${el.id}">${el.product} - ${el.price * el.quantity}€ </li>`
    })
}

const $listItems = $cart.querySelectorAll('li')

$listItems.forEach(el => {
    el.addEventListener('click', function() {
        const id = Number(el.getAttribute('id'))
        cart = cart.filter(prod => prod.id !== id)
        printCart(cart)
    })
})