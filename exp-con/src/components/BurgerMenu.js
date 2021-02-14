import React, { useState } from "react";
function BurgerMenu(props) {
  const [menu, menuToggle] = useState(false);
  const toggleMenu = function () {
    menuToggle(!menu);
  };
  return (
    <div className="burgerMenu">
      <div id="icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="text">EXP|CON</div>
      <h1 id="prompt">
        {menu && (
          <>
            <b>WHAT IS IT</b>
            <br />
            PERKS PRICING
          </>
        )}
      </h1>
    </div>
  );
}

export default BurgerMenu;
