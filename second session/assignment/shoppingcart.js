document.addEventListener('DOMContentLoaded', function() {
    var headerIcon = document.querySelector('.header-icon');

    if (headerIcon) {
        headerIcon.addEventListener('click', function() {
            
            window.location.href = 'shoppingmall.html';
        });
    }
});



// 페이지가 로드될 때 실행되는 함수
// script.js
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('mylist')) || [];
    const cartTableBody = document.querySelector('#cart_container tbody');
    cartTableBody.innerHTML = ''; // 기존 목록을 비움

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><input type="checkbox"></td>
            <td>
                <div class="product1">
                    <img src="${item.imgSrc}" alt="상품 이미지" class="product-image">
                    <h3>${item.name}</h3>
                </div>
            </td>
            <td>
                <div class="product-price">${formatPrice(item.price)}</div>
            </td>
            <td>
                <div class="product-category">${item.category}</div>
            </td>
            <td>
                <div class="delete-btn" onclick="removeItemFromCart(${index})">X</div>
            </td>
        `;

        cartTableBody.appendChild(row);
    });
}

function removeItemFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('mylist')) || [];
    cartItems.splice(index, 1); // 특정 인덱스의 품목을 삭제
    localStorage.setItem('mylist', JSON.stringify(cartItems)); // 업데이트된 목록을 다시 저장
    displayCartItems(); // 목록을 다시 표시
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



  