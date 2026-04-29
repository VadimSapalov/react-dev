import { Link, NavLink } from 'react-router-dom'

function Header ({ itemCount, price }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">MyGameStore</Link>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Головна</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/catalog">Бібліотека</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Про нас</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/contact">Контакти</NavLink>
        </li>
      </ul>

      <span className="navbar-text">
       Кошик ({itemCount}) | {price}$
      </span>
    </nav>
  )
}

export default Header;