const Product = ({ product, onDelete }) => (
  <div className="product-item">
    <span>
      <div className="product-list">
        <div className="single-product">
          <p>{product.productId}</p>
          <p>{product.productName}</p>
          <p>${product.sellerPrice.toFixed(2)}</p>
        </div>
        <button onClick={() => onDelete(product.productId)} className="del-btn">
          Delete
        </button>
      </div>
    </span>
  </div>
);
export default Product;
