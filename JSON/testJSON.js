// 상품 데이터 (JSON 형식)

const productsJson = `
    [
        {
            "id" : 101,
            "name":"노트북",
            "price":1000000,
            "stock":5
        },
        {
            "id" : 102,
            "name":"키보드",
            "price":20000,
            "stock":15
        },
        {
            "id" : 103,
            "name":"모니터",
            "price":20000,
            "stock":7
        }
    ]
`;

// JSON 문자열을 객체로 변환 (2가지 : 직접적인 방법, fetch에서 변환하는 방법)
// 참고로 역변환도 가능 (객체를 JSON 문자열로) : JSON.stringify()
const products = JSON.parse(productsJson);

// 상품목록 출력
products.forEach((product) => {
  console.log(
    `상품명: ${product.name}, 가격: ${product.price}, 재고: ${product.stock}`
  );
});
