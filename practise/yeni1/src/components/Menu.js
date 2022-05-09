import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/hakkimizda">Hakkımızda</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
