const mobileMenuIcon = document.querySelector('.menu');
const menuEmail = document.querySelector('.nabvar-email');
const menuEmailArrow = document.querySelector('.nabvar-email svg path')
const shoopingCartIcon = document.querySelector('.navbar-shopping-car')
const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailContainerCloseIcon = document.querySelector('.product-detail-close');

mobileMenuIcon.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shoopingCartIcon.addEventListener('click', toggleShoopingCart);
productDetailContainerCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleDesktopMenu() {
    menuEmail.classList.toggle("active");
    menuEmailArrow.classList.toggle("active");
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
}

function toggleShoopingCart() {
    mobileMenu.classList.add("inactive");
    menuEmail.classList.remove("active");
    menuEmailArrow.classList.remove("active");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    mobileMenu.classList.add("inactive");
    menuEmail.classList.remove("active");
    menuEmailArrow.classList.remove("active");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
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
        productCard.classList.add('cursor');
        productCard.addEventListener('click',openProductDetailAside);

    }
}
renderProducts(productList);