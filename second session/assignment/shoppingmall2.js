import { COPYEDITEMS as ITEMS } from "./shoppingmall.js";

// 상품 정보를 담고 있는 배열


//console.log(COPYEDITEMS); 
  // 상품 정보 배열을 순회하며 요소를 생성하는 함수
ITEMS.forEach(product => {
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
    document.querySelectorAll('.filtercategory').forEach(link => {
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
    
    document.querySelector('#' + category).style.display = 'flex';
}

  function renderProductsByCategory(products, category, elementId) {
    const filteredProducts = products.filter(product => product.category === category);
    const parentElement = document.querySelector(elementId);
  
    filteredProducts.forEach(product => {
      const liTag = document.createElement("li");
      liTag.classList.add("product");
      liTag.setAttribute("id", product.name);
  
      const imgTag = document.createElement("img");
      imgTag.src = product.imgSrc;
      imgTag.alt = product.altText;
  
      const divTag = document.createElement("div");
      const buttonTag = document.createElement("button");
      buttonTag.classList.add("like-button");
      buttonTag.textContent = "♥";
      divTag.appendChild(buttonTag);
  
      const h3Tag = document.createElement("h3");
      h3Tag.textContent = product.name;
  
      const pTag = document.createElement("p");
      pTag.textContent = `가격: ${product.price}`;
  
      liTag.appendChild(imgTag);
      liTag.appendChild(divTag);
      liTag.appendChild(h3Tag);
      liTag.appendChild(pTag);
  
      parentElement.appendChild(liTag);
    });
  }
  
  // 상품 목록 랜더링 함수 호출
  renderProductsByCategory(ITEMS, "운동용품", "#category1");
  renderProductsByCategory(ITEMS, "여가생활", "#category2");
  renderProductsByCategory(ITEMS, "의류", "#category3");
  