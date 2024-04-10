import { useState, useEffect } from "react";
import Product from "./Product";

const SellerPage = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [sellerPrice, setSellerPrice] = useState("");

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    const newProduct = {
      productId,
      productName,
      sellerPrice: parseFloat(sellerPrice),
    };
    setProducts([...products, newProduct]);
    setProductId("");
    setProductName("");
    setSellerPrice("");
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
  };

  const totalSellingPrice = products.reduce(
    (total, product) => total + product.sellerPrice,
    0
  );

  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <div className="form-container">
        <label htmlFor="productId">Product Id: </label>
        <input
          type="text"
          id="productId"
          placeholder="Product Id"
          className="input-field"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <label htmlFor="product_Name">Product Name: </label>
        <input
          type="text"
          placeholder="Product Name"
          id="product_Name"
          className="input-field"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label htmlFor="seller_Price">Seller Price: </label>
        <input
          type="text"
          placeholder="Seller Price"
          id="seller_price"
          className="input-field"
          value={sellerPrice}
          onChange={(e) => setSellerPrice(e.target.value)}
        />
        <button className="add-button" onClick={addProduct}>
          Add Product
        </button>
      </div>

      <div className="product-list">
        <div className="product-item-title">
          <h4>Product Id </h4>
          <h4>Product Name</h4>
          <h4>Seller Price</h4>
        </div>

        {products.map((product) => (
          <Product
            key={product.productId}
            product={product}
            onDelete={deleteProduct}
          />
        ))}
      </div>

      <div className="total-price">
        Total Selling Price: ${totalSellingPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default SellerPage;
