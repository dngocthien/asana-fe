import { useEffect, useState } from "react";
import { fetchProjects } from "./api/projects";
import "./App.css";
import Main from "./components/main/Main";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const [menu, setMenu] = useState(true);
  const [projects, setProjects] = useState([]);

  const refresh = () => {
    fetchProjects().then((res) => setProjects(res));
  };

  useEffect(() => {
    // fetchProjects().then((res) => setProjects(res));
    refresh();
  }, []);

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
      {menu ? <SideBar projects={projects} refresh={() => refresh()} /> : <></>}

      <div className={menu ? "sidebar-ml" : ""}>
        <Main />
      </div>
    </div>
  );
}

export default App;
