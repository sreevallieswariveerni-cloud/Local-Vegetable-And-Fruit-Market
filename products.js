// ==========================
// PRODUCT CARD FUNCTIONALITY
// ==========================

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    const addBtn = card.querySelector(".add-btn");
    const quantityBox = card.querySelector(".quantity-box");
    const minus = card.querySelector(".minus");
    const plus = card.querySelector(".plus");
    const count = card.querySelector(".count");
    const price = card.querySelector(".price");
    const weightSelect = card.querySelector(".weight-select");

    let quantity = 1;

    // Weight change
    weightSelect.addEventListener("change", () => {
        price.dataset.price = weightSelect.value;
        price.textContent = "₹" + weightSelect.value;
    });

    // Set initial price
    price.dataset.price = weightSelect.value;

    // ADD BUTTON
    addBtn.addEventListener("click", () => {

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const product = {
            image: card.querySelector("img").src,
            name: card.querySelector("h3").innerText,
            price: Number(weightSelect.value),
            weight: weightSelect.options[weightSelect.selectedIndex].text,
            quantity: 1
        };

        const existing = cart.find(item =>
            item.name === product.name &&
            item.weight === product.weight
        );

        if (existing) {
            existing.quantity++;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Popup
        document.getElementById("popup-img").src = product.image;
        document.getElementById("popup-name").innerText = product.name;
        document.getElementById("popup-weight").innerText = product.weight;
        document.getElementById("popup-price").innerText = "₹" + product.price;

        document.getElementById("cartPopup").classList.add("show");

        setTimeout(() => {
            document.getElementById("cartPopup").classList.remove("show");
        }, 3000);

        addBtn.style.display = "none";
        quantityBox.style.display = "flex";

        quantity = 1;
        count.innerText = quantity;
        price.innerText = "₹" + (Number(weightSelect.value) * quantity);

    });

    // PLUS
    plus.addEventListener("click", () => {

        quantity++;
        count.innerText = quantity;
        price.innerText = "₹" + (Number(weightSelect.value) * quantity);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const productName = card.querySelector("h3").innerText;

        const item = cart.find(p => p.name === productName);

        if (item) {
            item.quantity = quantity;
        }

        localStorage.setItem("cart", JSON.stringify(cart));

    });

    // MINUS
    minus.addEventListener("click", () => {

        quantity--;

        if (quantity <= 0) {

            quantity = 1;

            addBtn.style.display = "block";
            quantityBox.style.display = "none";

            price.innerText = "₹" + Number(weightSelect.value);

            return;
        }

        count.innerText = quantity;

        price.innerText = "₹" + (Number(weightSelect.value) * quantity);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const productName = card.querySelector("h3").innerText;

        const item = cart.find(p => p.name === productName);

        if (item) {
            item.quantity = quantity;
        }

        localStorage.setItem("cart", JSON.stringify(cart));

    });

});

// Go To Cart
document.getElementById("go-cart-btn").onclick = function () {
    window.location.href = "cart.html";
};

// Close Popup
document.querySelector(".close-popup").onclick = function () {
    document.getElementById("cartPopup").classList.remove("show");
};