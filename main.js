const mobileMenuIcon = document.querySelector('.menu');
const menuEmail = document.querySelector('.nabvar-email');
const menuEmailArrow = document.querySelector('.nabvar-email svg path')
const shoopingCartIcon = document.querySelector('.navbar-shopping-car')
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoopingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shoopingCartIcon.addEventListener('click', toggleShoopingCart);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoopingCart.classList.add("inactive");
}

function toggleDesktopMenu() {
    menuEmail.classList.toggle("active");
    menuEmailArrow.classList.toggle("active");
    desktopMenu.classList.toggle("inactive");
    shoopingCart.classList.add("inactive");
}

function toggleShoopingCart() {
    mobileMenu.classList.add("inactive");
    menuEmail.classList.remove("active");
    menuEmailArrow.classList.remove("active");
    desktopMenu.classList.add("inactive");
    shoopingCart.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name:'Bike',
    price:120,
    image:'./images/pexels-photo-276517.jpeg',
});
productList.push({
    name:'Go-car',
    price:320,
    image:'./images/pexels-photo-276517.jpeg',
});
productList.push({
    name:'Wheel',
    price:20,
    image:'./images/pexels-photo-276517.jpeg',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // Esta es la imagen que se itenera
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        // Esta es el precio que se itenera
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        // Esta es el nombre que se itenera
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCar);
    
        productInfoDiv.append(productPrice);
        productInfoDiv.append(productName);
    
        productInfo.append(productInfoDiv);
        productInfo.append(productInfoFigure);
    
        productCard.append(imgElement);
        productCard.append(productInfo);
    
        cardsContainer.append(productCard);
    
    }
}
renderProducts(productList);