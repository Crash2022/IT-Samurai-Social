import React from "react";

export const Navbar = () => {
  return (
    <nav className="left__navmenu">
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/messages">Messages</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">News</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">Music</a>
      </div>
      <div>
        <a href="src/components/Navbar/Navbar#">Settings</a>
      </div>
    </nav>
  );
}