import "./ProductList.css";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₫399.000",
    image: "https://picsum.photos/seed/p1/600/400",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₫599.000",
    image: "https://picsum.photos/seed/p2/600/400",
  },
  {
    id: 3,
    name: "Keyboard Mechanical",
    price: "₫499.000",
    image: "https://picsum.photos/seed/p3/600/400",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: "₫299.000",
    image: "https://picsum.photos/seed/p4/600/400",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: "₫199.000",
    image: "https://picsum.photos/seed/p5/600/400",
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: "₫249.000",
    image: "https://picsum.photos/seed/p6/600/400",
  },
];

function ProductList() {
  return (
    <div className="page">
      <h2 className="page-title">Product List</h2>

      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
