import React from "react";

function Header() {
  return (
    <header className="header">
        <img
            src="https://bikescollective.com/wp-content/uploads/2020/05/Bikes-Collectives-logo-revised-black-logo-PNG.png"
            style={{ width: "100px", height: "100px" }}
            alt="logo">
        </img>
        <span className="socialName">
            This is NewSocial
        </span>
    </header>
  );
}

export default Header;
