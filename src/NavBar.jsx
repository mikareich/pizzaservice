import React from "react";
import * as Icons from "heroicons-react";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item nav__list-title">
          <Icons.ChartPie />
          <h2 className="title">Pizza Trier</h2>
          <span className="subtitle">Beste Pizzen aus Trier</span>
        </li>
        <li className="nav__list-item">
          <Icons.User />
        </li>
      </ul>
    </nav>
  );
}
