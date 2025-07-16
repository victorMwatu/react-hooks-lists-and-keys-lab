import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
          {links.map((l, i) => <a key={i} href={`#${l}`}> {l} </a>)}
  </nav>;
}

export default NavBar;
