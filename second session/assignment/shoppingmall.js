export const COPYEDITEMS = [
    { 
        category : "운동용품",
      imgSrc: "./static2/img/자전거.jpg",
      altText: "자전거",
      name: "자전거",
      price: "10000"
    },
    {
        category : "운동용품",
      imgSrc: "./static2/img/아령.jpg",
      altText: "아령",
      name: "아령",
      price: "5000"
    },

    {
        category : "운동용품",
      imgSrc: "./static2/img/허리보호대.jpg",
      altText: "허리보호대",
      name: "허리보호대",
      price: "6000"      
    },
    {
        category : "여가생활",
        imgSrc: "./static2/img/책.jpg",
        altText: "책",
        name: "책",
        price: "6000"    
    },
    {
        category:"여가생활",
        imgSrc: "./static2/img/텐트.jpg",
        altText: "텐트",
        name: "텐트",
        price: "100000" 
    },
    {
        category:"여가생활",
      imgSrc: "./static2/img/인형.jpg",
      altText: "인형",
      name: "인형",
      price: "50000"
    },
    {
        category:"의류",
      imgSrc: "./static2/img/모자.jpg",
      altText: "모자",
      name: "모자",
      price: "30000"
    },
    {
        category:"의류",
      imgSrc: "./static2/img/청바지.jpg",
      altText: "청바지",
      name: "청바지",
      price: "20000"
    },
    {
        category:"의류",
      imgSrc: "./static2/img/th.jpg",
      altText: "치마",
      name: "치마",
      price: "20000"
    }

    // 여기에 더 많은 상품 정보를 추가할 수 있습니다.
  ];


  

document.addEventListener('DOMContentLoaded', function() {
    const sidebarBtn = document.getElementById('hamburger-icon');
    const modal = document.getElementById('myModal');
    const closeBtn = document.getElementsByClassName('close')[0];

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
        product.addEventListener('click', function(event) {
            // 로컬 스토리지에서 "mylist" 키 값으로 저장된 배열을 가져옴
            // 저장된 값이 없다면 빈 배열로 초기화
            let array = JSON.parse(localStorage.getItem("mylist")) || [];

            

            // confirm 대화 상자를 사용하여 사용자의 응답을 얻음
            const isConfirmed = confirm('이 상품을 장바구니페이지에 추가하시겠습니까?');

            // 사용자가 "확인"을 클릭했을 경우
            if (isConfirmed) {
                // 여기서 'copyeditems'는 어디선가 정의되어 있어야 합니다.
            
                const filterarray = COPYEDITEMS.filter(item => item.name === event.currentTarget.getAttribute("id"));
                console.log(filterarray);

                if (filterarray.length > 0) {
                    
                    const newArray = [...array, filterarray[0]];

                    // 로컬 스토리지에 저장. 여기서는 수정된 배열을 다시 저장합니다.
                    localStorage.setItem("mylist", JSON.stringify(newArray));

                    alert('상품이 장바구니페이지에 추가되었습니다.');
                }
            } else {
                // 사용자가 "취소"를 선택했을 때 실행할 코드
                alert('상품 추가가 취소되었습니다.');
            }
        });
    });
});
