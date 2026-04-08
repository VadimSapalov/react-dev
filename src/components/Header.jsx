function Header ({itemCount, price}) {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#" className="nav-link">Головна</a></li>
          <li><a href="#" className="nav-link">Каталог</a></li>
          <li><a href="#" className="nav-link">Про нас</a></li>
          <li>Кошик: ({itemCount})</li>
          <li>Загальна ціна: ({price})</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;