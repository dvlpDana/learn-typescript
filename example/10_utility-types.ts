interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

//1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  //...
}

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

//2. 특정 상품의 상세 정보를 나타내기 위한 함수
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}
// #1
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// #2
// type UpdateProduct = {
//     id?: Product['id'];
//     name?: Product['name'];
//     price?: Product['price'];
//     brand?: Product['brand'];
//     stock?: Product['stock'];
// };

// #3 - Mapped Types
// type UpdateProduct = {
//   [p in 'id' | 'name' | 'price' | 'brand' | 'stock']?: Product[p]
// }

// #4
// type UpdateProduct = {
//   [p in keyof Product]?: Product[p]
// }

type UpdateProduct = Partial<Product>;
//3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// #1 - Partial
type Subset<T> = {
  [K in keyof T]?: T[K];
};

const productDetail: Product = {
  id: 1,
};

// #2 - Pick
type PickFewThings<T, K extends keyof T> = {
  [P in K]: T[P];
}

const productName: PickFewThings<Product, 'name'> = {

}
const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {
  
}