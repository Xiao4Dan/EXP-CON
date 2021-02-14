import React, { useState } from "react";
import BurgerMenu from "./components/BurgerMenu";
import Landing from "./components/Landing";
import Payment from "./components/Payment";
import Pricing from "./components/Pricing";
function App() {
  const [route, setRoute] = useState("landing");
  return (
    <div className="App">
      <BurgerMenu />
      {route === "landing" && <Landing router={setRoute} />}
      {route === "pricing" && <Pricing router={setRoute} />}
      {route === "payment" && <Payment router={setRoute} />}
    </div>
  );
}

export default App;
