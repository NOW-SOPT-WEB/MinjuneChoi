document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.header-icon');

    if (headerIcon) {
        headerIcon.addEventListener('click', function() {
            
            window.location.href = 'shoppingmall.html';
        });
    }
});



// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
    displayProductInfo();
};

// localStorage와 sessionStorage에서 상품 정보를 불러와 화면에 표시하는 함수
function displayProductInfo() {
    // localStorage에서 상품 정보 불러오기(영구적)
    var imgSrc = localStorage.getItem('productImgSrc');
    var productName = localStorage.getItem('productName');
    var productPrice = localStorage.getItem('productPrice');
    

    // HTML 요소 선택
    var productImg = document.querySelector('.product1 img');
    var productName1 = document.querySelector('.product1 h3');
    var productNamep=document.querySelector('.product1 p')

    // 불러온 상품 정보를 HTML 요소에 할당
    productImg.src = imgSrc;
    productName1.innerText= productName;
    productNamep.innerText = productPrice;
    

}

  