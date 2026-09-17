function ProductCard({ product }) {
  return (
    <>
      <h2>{product.name}</h2>

      <p>Price: ${product.price}</p>

      {product.inStock ? (
        <button>Buy Now</button>
      ) : (
        <button>Out of Stock</button>
      )}

      {product.rating >= 4.5 && <p>⭐ Top Rated</p>}
    </>
  );
}

export default ProductCard;