import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Каталог</Link>
      <Link to="/clients">Наши клиенты</Link>
    </nav>
  </header>
);

export default Header;