import React from "react";
import { useFetch } from "../custom-hook/useFetch";
import Product from "./product";

const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>products</h2>

      <section className="products">
        {products.map(product => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
