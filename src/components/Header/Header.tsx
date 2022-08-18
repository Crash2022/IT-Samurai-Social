import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          src="https://bikescollective.com/wp-content/uploads/2020/05/Bikes-Collectives-logo-revised-black-logo-PNG.png"
          style={{ width: "100px", height: "100px" }}
          alt="logo">
        </img>
      </div>
      <div className="header__socialName">
        This is NewSocial
      </div>
    </header>
  );
}