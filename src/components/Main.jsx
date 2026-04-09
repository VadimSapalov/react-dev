import StoreItemCard from "./StoreItemCard";

const softwares = [
  {id: 1, title: 'Crimson Desert', description: 'Ipsum lorem at boreale', price: 70},
  {id: 2, title: 'Helldirevs', description: 'qwertytrewq  qwertyuytrewqwerty', price: 30},
  {id: 3, title: 'Stellar Blade', description: 'qwertyuytrewqqwertyu', price: 50},
  {id: 4, title: 'Wuthering Waves', description: 'qqwertyu', price: 0},
]

function Main ({onAddToCart}) {
  return (
    <main className="container mt-4">
      <div className="row">
        {softwares.map((software)=> (
            <StoreItemCard key={software.id} data = {software} onAddToCart={onAddToCart}/>
          ))}
      </div>
    </main>
  );
};

export default Main;