// Quantity Buttons
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {

    const minus = card.querySelector(".minus");
    const plus = card.querySelector(".plus");
    const count = card.querySelector(".count");

    let quantity = 1;

    plus.addEventListener("click", () => {
        quantity++;
        count.textContent = quantity;
    });

    minus.addEventListener("click", () => {
        if(quantity > 1){
            quantity--;
            count.textContent = quantity;
        }
    });

});


// Add To Cart

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const card = button.closest(".product-card");

        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const quantity = Number(card.querySelector(".count").textContent);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(item => item.name === name);

        if(existingProduct){

            existingProduct.quantity += quantity;

        }

        else{

            cart.push({

                name:name,
                price:price,
                quantity:quantity

            });

        }

        localStorage.setItem("cart",JSON.stringify(cart));

        updateCartCount();

        alert("Added to Cart Successfully!");

    });

});


// Cart Count

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let totalItems = 0;

    cart.forEach(item=>{

        totalItems += item.quantity;

    });

    const cartCount = document.getElementById("cart-count");

    if(cartCount){

        cartCount.textContent = totalItems;

    }

}

updateCartCount();


// Quick View

const eyes = document.querySelectorAll(".fa-eye");

eyes.forEach((eye,index)=>{

    eye.addEventListener("click",()=>{

        const names = [

            "Fresh Mango",
            "Watermelon",
            "Fresh Apple",
            "Jamun",
            "Lychee",
            "Muskmelon"

        ];

        alert(names[index]);

    });

});