document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.header-icon');

    if (headerIcon) {
        headerIcon.addEventListener('click', function() {
            
            window.location.href = 'shoppingmall.html';
        });
    }
});


// localStorage에서 상품 정보 접근
var imgSrc = localStorage.getItem('productImgSrc');
var imgAlt = localStorage.getItem('productImgAlt');
var productName = localStorage.getItem('productName');
var productPrice = localStorage.getItem('productPrice');

// sessionStorage에서 상품 정보 접근
var imgSrcSession = sessionStorage.getItem('productImgSrc');
var imgAltSession = sessionStorage.getItem('productImgAlt');
var productNameSession = sessionStorage.getItem('productName');
var productPriceSession = sessionStorage.getItem('productPrice');
