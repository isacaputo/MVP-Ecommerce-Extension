import { useEffect, useState } from "react";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`/api/products`, {
        method: "GET",
      });
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1>FROMAGERIA TESILLI</h1>
      </div>
      <div>
        {products.map((product) => (
          <div className="product" key={product.product_id}>
            <div>{product.product_name}</div>
            <div>{product.product_description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ProductsList;
