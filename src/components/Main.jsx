const softwares = [
  {id: 1, title: 'Crimson Desert', description: 'Ipsum lorem at boreale', price: 70},
  {id: 2, title: 'Helldirevs', description: 'qwertytrewq  qwertyuytrewqwerty', price: 30},
  {id: 3, title: 'Stellar Blade', description: 'qwertyuytrewqqwertyu', price: 50},
  {id: 4, title: 'Wuthering Waves', description: 'qqwertyu', price: 0},
]

function Main ({onAddToCart}) {
  return (
    <main className="container mt-4">
      <div className="row g-4">
        {softwares.map((software)=> (
          <div className="col-md-4 d-flex justify-content-center">
            <StoreItemCard key={software.id} data = {software} onAddToCart={onAddToCart}/>
          </div>
          ))}
      </div>
    </main>
  );
};

function StoreItemCard ({ data, onAddToCart}) {
  const handleAddToCartClick = () => onAddToCart(data.price);
  return (
    <div className="card" style={{ width: '18rem' }}>
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{data.title}</h5>
      <p className="card-text">{data.description}</p>
      <p>Price: {data.price}</p>
      <button className="btn btn-primary" onClick={handleAddToCartClick}>Купити</button>
    </div>
  </div>    
  );
}

export default Main;