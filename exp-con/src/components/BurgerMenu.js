import React from "react";
function BurgerMenu(props) {
  const toggleMenu = function () {
    console.log("open menu!");
  };
  return (
    <div className="burgerMenu">
      <div id="icon">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="text">EXP|CON</div>
    </div>
  );
}

export default BurgerMenu;
