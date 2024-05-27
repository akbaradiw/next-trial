import Link from "next/link";
const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <Link href="/">Home</Link>
      <Link href="/product">Product</Link>
    </div>
  );
};

export default Product;
