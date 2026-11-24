// script.js
const products = [
  {
    name: "시베리아 보온 모자 - 레드",
    price: "₩89,000",
    img: "red-hat.jpg",
    desc: "털 안감과 방수 원단으로 극한 추위에서도 따뜻함을 유지합니다."
  },
  {
    name: "시베리아 보온 모자 - 네이비",
    price: "₩89,000",
    img: "navy-hat.jpg",
    desc: "심플한 디자인에 고급스러운 색감, 여성 라인 맞춤형 사이즈 제공."
  },
  {
    name: "시베리아 보온 모자 - 핑크",
    price: "₩89,000",
    img: "pink-hat.jpg",
    desc: "귀여운 핑크 컬러로 겨울 패션을 포인트!"
  }
];

function renderProducts() {
  const grid = document.getElementById('products');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="info">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <p><strong>${p.price}</strong></p>
        <button onclick="alert('구매 페이지는 아직 준비 중입니다.')">구매하기</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);
