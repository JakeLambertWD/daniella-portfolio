import { Products } from "../../typings";

const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data.products);
  return data.products;
};

export const LandingPage = async () => {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: Products) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
