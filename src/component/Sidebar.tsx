import { AiFillHome } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { FaFileContract } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <div className="aside-header">
        <img src="/logo.ab283875.svg" alt="" />
      </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="icon-container">
            <AiFillHome />
          </div>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="icon-container">
            <MdFavorite />
          </div>
          <span>Favorites</span>
        </NavLink>
        <NavLink
          to="/finance"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="icon-container">
            <FaFileContract />
          </div>
          <span>Finance</span>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
