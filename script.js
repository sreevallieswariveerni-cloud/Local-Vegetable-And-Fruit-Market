// ===================== CART =====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Cart Count
const cartCount = document.getElementById("cart-count");
if (cartCount) {
    cartCount.innerText = cart.length;
}

// Add To Cart
const buttons = document.querySelectorAll(".add-btn");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        const card = this.closest(".product-card");

        const weight = card.querySelector(".weight-select");

const product = {
    image: card.querySelector("img").src,
    name: card.querySelector("h3").innerText,
    price: Number(weight.value),
    weight: weight.options[weight.selectedIndex].text,
    quantity: 1
};
        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart));

        if(cartCount){
            cartCount.innerText = cart.length;
        }

        const popup = document.getElementById("cartPopup");

document.getElementById("popup-img").src = product.image;
document.getElementById("popup-name").innerText = product.name;
document.getElementById("popup-weight").innerText = product.weight;
document.getElementById("popup-price").innerText = "₹" + product.price;

popup.classList.add("show");

setTimeout(function(){
    popup.classList.remove("show");
},3000);
    });

});


// ===================== CART PAGE =====================

const cartItems = document.getElementById("cart-items");

if (cartItems) {

    let subtotal = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2 style="text-align:center;color:#2e8b57;">
                Your Cart is Empty 🛒
            </h2>
        `;

    } else {

        cart.forEach(function(product,index){

            const quantity = product.quantity || 1;
            const total = product.price * quantity;

            subtotal += total;

            cartItems.innerHTML += `

            <div class="cart-card">

                <img src="${product.image}" class="cart-img">

                <div class="cart-info">

                    <h2>${product.name}</h2>

                    <p>${product.weight}</p>

                    <div class="price-row">

                        <span class="price">₹${product.price}</span>

                        <div class="qty-box">

                            <button onclick="decreaseQty(${index})">-</button>

                            <span>${quantity}</span>

                            <button onclick="increaseQty(${index})">+</button>

                        </div>

                    </div>

                </div>

                <button class="delete-btn" onclick="removeItem(${index})">
                    🗑
                </button>

            </div>

            `;

        });

        document.getElementById("subtotal").innerText = "₹" + subtotal;
        document.getElementById("total").innerText = "₹" + subtotal;

    }

}

// Increase

function increaseQty(index){

    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

// Decrease

function decreaseQty(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;

    }else{

        cart.splice(index,1);

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}

// Remove

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    location.reload();

}





// ===================== RTL =====================

const rtlBtn = document.getElementById("rtl-btn");

if(rtlBtn){

    if(localStorage.getItem("rtl") === "on"){
        document.body.classList.add("rtl");
    }

    rtlBtn.addEventListener("click",function(){

        document.body.classList.toggle("rtl");

        if(document.body.classList.contains("rtl")){
            localStorage.setItem("rtl","on");
        }else{
            localStorage.removeItem("rtl");
        }

    });

}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});




function toggleMission() {
    document.getElementById("missionText").style.display = "inline";
    document.getElementById("missionLink").style.display = "none";
}

function toggleVision() {
    document.getElementById("visionText").style.display = "inline";
    document.getElementById("visionLink").style.display = "none";
}


const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

// Mobile Dropdown

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(item => {

    item.addEventListener("click", function(e){

        if(window.innerWidth <= 992){

            e.preventDefault();

            this.parentElement.classList.toggle("active");

        }

    });

});