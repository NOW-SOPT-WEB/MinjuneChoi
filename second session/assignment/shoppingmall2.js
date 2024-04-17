// 상품 정보를 담고 있는 배열

const items = [
    { 
        category : "운동용품",
      imgSrc: "./static/img/자전거.jpg",
      altText: "자전거",
      name: "자전거",
      price: "10000"
    },
    {
        category : "운동용품",
      imgSrc: "./static/img/아령.jpg",
      altText: "아령",
      name: "아령",
      price: "5000"
    },

    {
        category : "운동용품",
      imgSrc: "./static/img/허리보호대.jpg",
      altText: "허리보호대",
      name: "허리보호대",
      price: "6000"      
    },
    {
        category : "여가생활",
        imgSrc: "./static/img/책.jpg",
        altText: "책",
        name: "책",
        price: "6000"    
    },
    {
        category:"여가생활",
        imgSrc: "./static/img/텐트.jpg",
        altText: "텐트",
        name: "텐트",
        price: "100000" 
    },
    {
        category:"여가생활",
      imgSrc: "./static/img/인형.jpg",
      altText: "인형",
      name: "인형",
      price: "50000"
    },
    {
        category:"의류",
      imgSrc: "./static/img/모자.jpg",
      altText: "모자",
      name: "모자",
      price: "30000"
    },
    {
        category:"의류",
      imgSrc: "./static/img/청바지.jpg",
      altText: "청바지",
      name: "청바지",
      price: "20000"
    },
    {
        category:"의류",
      imgSrc: "./static/img/th.jpg",
      altText: "치마",
      name: "치마",
      price: "20000"
    }





// 여기에 더 많은 상품 정보를 추가할 수 있습니다.
  ];
  
  // 상품 정보 배열을 순회하며 요소를 생성하는 함수
items.forEach(product => {
    const divTag = document.createElement("div");
    divTag.classList.add("product");
    divTag.setAttribute("id",product.name);
  
    const imgTag = document.createElement("img");
    imgTag.src = product.imgSrc;
    imgTag.alt = product.altText;
  
    const bDivTag = document.createElement("div");
  
    const buttonTag = document.createElement("button");
    buttonTag.classList.add("like-button");
    buttonTag.textContent = "♥";
  
    const hTag = document.createElement("h3");
    hTag.textContent = product.name;
  
    const pTag = document.createElement("p");
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    pTag.textContent = `가격 :  ${formatPrice(product.price)} 원`;
    
    divTag.appendChild(imgTag);
    bDivTag.appendChild(buttonTag);
    divTag.appendChild(bDivTag);
    divTag.appendChild(hTag);
    divTag.appendChild(pTag);
  
    const sectionTag = document.querySelector("#all");
    sectionTag.appendChild(divTag);
});
  

document.addEventListener('DOMContentLoaded', function() {
    // 카테고리 링크 클릭 이벤트
    document.querySelectorAll('nav ul div li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let selectedCategory = this.getAttribute('href').substring(1);
            displayCategory(selectedCategory);
        });
    });
});

function displayCategory(category) {
    // 모든 섹션을 숨깁니다.
    document.querySelectorAll('.category').forEach(section => {
        section.style.display = 'none';
    });
    
    // 선택된 카테고리만 표시합니다.
    document.querySelector('#' + category).style.display = '';
}


// 운동용품 함수
function renderProducts(products) {
    const productslist = products.filter(product => product.category === "운동용품");
    console.log(productslist);
    // 상품 목록을 추가할 부모 요소 선택 (예: ul 태그)
  
    // 상품 정보 배열을 순회
    productslist.forEach(product => {
      // li 요소 생성
      const liTag = document.createElement("li");
      liTag.classList.add("product");
  
      // img 요소 생성
      const imgTag = document.createElement("img");
      imgTag.src = product.imgSrc;
      imgTag.alt = product.altText;
  
      // 좋아요 버튼을 포함하는 div 요소 생성
      const divTag = document.createElement("div");
      const buttonTag = document.createElement("button");
      buttonTag.classList.add("like-button");
      buttonTag.textContent = "♥";
      divTag.appendChild(buttonTag);
  
      // 제품 이름을 표시하는 h3 요소 생성
      const h3Tag = document.createElement("h3");
      h3Tag.textContent = product.name;
  
      // 가격을 표시하는 p 요소 생성
      const pTag = document.createElement("p");
      pTag.textContent = `가격: ${product.price}`;
  
      // li 요소에 모든 자식 요소 추가
      liTag.appendChild(imgTag);
      liTag.appendChild(divTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      


      const ulTag = document.querySelector("#category1");
      ulTag.appendChild(liTag);
      // 최종적으로 생성된 li 요소를 부모 요소에 추가

    });
  }
  
  // 상품 목록 랜더링 함수 호출
  renderProducts(items);
  
//여가생활
function renderProduct1s(products) {
    const productslist = products.filter(product => product.category === "여가생활");
    console.log(productslist);
    // 상품 목록을 추가할 부모 요소 선택 (예: ul 태그)
  
    // 상품 정보 배열을 순회
    productslist.forEach(product => {
      // li 요소 생성
      const liTag = document.createElement("li");
      liTag.classList.add("product");
  
      // img 요소 생성
      const imgTag = document.createElement("img");
      imgTag.src = product.imgSrc;
      imgTag.alt = product.altText;
  
      // 좋아요 버튼을 포함하는 div 요소 생성
      const divTag = document.createElement("div");
      const buttonTag = document.createElement("button");
      buttonTag.classList.add("like-button");
      buttonTag.textContent = "♥";
      divTag.appendChild(buttonTag);
  
      // 제품 이름을 표시하는 h3 요소 생성
      const h3Tag = document.createElement("h3");
      h3Tag.textContent = product.name;
  
      // 가격을 표시하는 p 요소 생성
      const pTag = document.createElement("p");
      pTag.textContent = `가격: ${product.price}`;
  
      // li 요소에 모든 자식 요소 추가
      liTag.appendChild(imgTag);
      liTag.appendChild(divTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      


      const ulTag = document.querySelector("#category2");
      ulTag.appendChild(liTag);
      // 최종적으로 생성된 li 요소를 부모 요소에 추가

    });
  }
  // 상품 목록 랜더링 함수 호출
  renderProduct1s(items);



//의류 함수
  function renderProduct2s(products) {
    const productslist = products.filter(product => product.category === "의류");
    console.log(productslist);
    // 상품 목록을 추가할 부모 요소 선택 (예: ul 태그)
  
    // 상품 정보 배열을 순회
    productslist.forEach(product => {
      // li 요소 생성
      const liTag = document.createElement("li");
      liTag.classList.add("product");
  
      // img 요소 생성
      const imgTag = document.createElement("img");
      imgTag.src = product.imgSrc;
      imgTag.alt = product.altText;
  
      // 좋아요 버튼을 포함하는 div 요소 생성
      const divTag = document.createElement("div");
      const buttonTag = document.createElement("button");
      buttonTag.classList.add("like-button");
      buttonTag.textContent = "♥";
      divTag.appendChild(buttonTag);
  
      // 제품 이름을 표시하는 h3 요소 생성
      const h3Tag = document.createElement("h3");
      h3Tag.textContent = product.name;
  
      // 가격을 표시하는 p 요소 생성
      const pTag = document.createElement("p");
      pTag.textContent = `가격: ${product.price}`;
  
      // li 요소에 모든 자식 요소 추가
      liTag.appendChild(imgTag);
      liTag.appendChild(divTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
      


      const ulTag = document.querySelector("#category3");
      ulTag.appendChild(liTag);
      // 최종적으로 생성된 li 요소를 부모 요소에 추가

    });
  }
  // 상품 목록 랜더링 함수 호출
  renderProduct2s(items);





  