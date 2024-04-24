document.addEventListener('DOMContentLoaded', function() {
    let headerIcon = document.querySelector('.header-icon');

    if (headerIcon) {
        headerIcon.addEventListener('click', function() {
            
            window.location.href = 'shoppingmall.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var cart__home = document.querySelector('.cart__home');

    if (cart__home) {
        cart__home.addEventListener('click', function() {
            
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
            <td><input type="checkbox" class = "checkbox"></td>
            <td>
                <div class="product1">
                    <img src="${item.imgSrc}" alt="상품 이미지" class="product-image">
                    
                </div>
            </td>
            <td>    
                <div class="product1">
                    <h4>${item.name}</h4>
                </div>
            </td>



            <td>
                <div class="product-price">${formatPrice(item.price)}원</div>
            </td>
            <td>
                <div class="product-category">${item.category}</div>
            </td>
            <td>
                <div class="delete-btn" type ="button" onclick="removeItemFromCart(${index})">삭제</div>
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
    return Number(price).toLocaleString() // price가 이미 Number 타입이라면 Number는 생략해도됩니다
}


 //모달 함수
const cartBuyButton = document.querySelector('.cart__buy');
const modal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close-button');
const confirmPurchaseBtn = document.getElementById('confirmPurchase');

cartBuyButton.onclick = function() {
    modal.style.display = "block";
    displayCartItemsInModal(); // 모달 내에 장바구니 목록을 표시하는 함수
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

confirmPurchaseBtn.onclick = function() {
    alert("구매가 완료되었습니다!");
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function displayCartItemsInModal() {
    const cartItems = JSON.parse(localStorage.getItem('mylist')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let total = 0;
    
    cartItemsContainer.innerHTML = ''; // 기존 목록을 비움
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.imgSrc}" class="product-image" style="width:30px; height:30px;">
            <span>${item.name} - ${formatPrice(item.price)}원</span>
        `;
        cartItemsContainer.appendChild(itemElement);
        let priceint = parseFloat(item.price);
        total += priceint;
    });
    totalPriceElement.textContent = `총 금액: ${formatPrice(total)}원`;
}




