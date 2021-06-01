import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/registrar">Registrar</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
    </div>
  );
};

export default Navigation;
