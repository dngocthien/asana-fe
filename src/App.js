import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const [menu, setMenu] = useState(true);
  return (
    <div className="App">
      <div className="navbar ">
        <div className="navbar-menu" onClick={() => setMenu(!menu)}>
          <div className="navbar-menu-i"></div>
          <div className="navbar-menu-i"></div>
          <div className="navbar-menu-i"></div>
        </div>
        <div className="navbar-brand">asana</div>
      </div>
      {menu ? <SideBar /> : <></>}

      <div className={menu ? "sidebar-ml" : ""}>
        <Main />
      </div>
    </div>
  );
}

export default App;
