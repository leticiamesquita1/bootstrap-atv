document.addEventListener("DOMContentLoaded", function () {
    let cart = [];
    const cartButton = document.getElementById("cartButton");
    const cartItems = document.getElementById("cartItems");
    const cartList = document.getElementById("cartList");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const addToCartButtons = document.querySelectorAll(".carrinho button");
    const images = document.querySelectorAll(".imagem img");
    const clearCartBtn = document.createElement("button");
    
    clearCartBtn.innerText = "Limpar Carrinho";
    clearCartBtn.id = "clearCartBtn";
    clearCartBtn.style.marginTop = "10px";
    clearCartBtn.style.padding = "10px";
    clearCartBtn.style.borderRadius = "8px";
    clearCartBtn.style.backgroundColor = "#ff6666";
    clearCartBtn.style.color = "white";
    clearCartBtn.style.border = "none";
    clearCartBtn.style.cursor = "pointer";
    cartItems.appendChild(clearCartBtn);

    addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const productName = images[index].getAttribute("data-img");
            const productImg = images[index].getAttribute("src");
            
            const product = { name: productName, img: productImg };
            cart.push(product);
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.classList.add("cart-item");
            li.innerHTML = `<img src="${item.img}" alt="${item.name}"> <p>${item.name}</p> <button class='remove-item' data-index='${index}'>X</button>`;
            cartList.appendChild(li);
        });

        document.querySelectorAll(".remove-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    cartButton.addEventListener("click", function () {
        cartItems.style.display = "block";
    });

    closeCartBtn.addEventListener("click", function () {
        cartItems.style.display = "none";
    });

    clearCartBtn.addEventListener("click", function () {
        cart = [];
        updateCart();
    });
});
