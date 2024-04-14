document.addEventListener('DOMContentLoaded', function() {
    var sidebarBtn = document.getElementById('hamburger-icon');
    var modal = document.getElementById('myModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    sidebarBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', function() {
            // confirm 대화 상자를 사용하여 사용자의 응답을 얻음
            const isConfirmed = confirm('이 상품을 장바구니페이지에 추가하시겠습니까?');

            // 사용자가 "확인"을 클릭했을 경우
            if (isConfirmed) {
               
                var imgSrc = document.querySelector('.product img').src;
                var imgAlt = document.querySelector('.product img').alt;
                var productName = document.querySelector('.product h3').innerText;
                var productPrice = document.querySelector('.product p').innerText;
            
                // localStorage에 저장
                localStorage.setItem('productImgSrc', imgSrc);
                localStorage.setItem('productImgAlt', imgAlt);
                localStorage.setItem('productName', productName);
                localStorage.setItem('productPrice', productPrice);
            
                // sessionStorage에 저장
                sessionStorage.setItem('productImgSrc', imgSrc);
                sessionStorage.setItem('productImgAlt', imgAlt);
                sessionStorage.setItem('productName', productName);
                sessionStorage.setItem('productPrice', productPrice);
                
                alert('상품이 장바구니페이지에 추가되었습니다.');
            } else {
                // 사용자가 "취소"를 선택했을 때 실행할 코드
                alert('상품 추가가 취소되었습니다.');
            }
        });
    });
});

