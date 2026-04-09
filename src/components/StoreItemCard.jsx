function StoreItemCard({ data, onAddToCart }) {
  const handleAddToCartClick = () => {
    onAddToCart(data.price);
  };

  return (
    <div className="col-md-4 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="fw-bold">Ціна: ${data.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCartClick}>Купити</button>
        </div>
      </div>
    </div>
  );
}

export default StoreItemCard;