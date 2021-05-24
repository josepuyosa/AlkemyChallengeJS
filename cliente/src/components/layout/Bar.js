import React from "react";
const Bar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Jose Puyosa</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Sign out</a>
      </nav>
    </header>
  );
};

export default Bar;
