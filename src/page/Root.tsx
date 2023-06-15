import "../styles/App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";

function Root() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
