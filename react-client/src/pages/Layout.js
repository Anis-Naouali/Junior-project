import { Outlet, Link } from "react-router-dom";
import "../Layout.css"
const Layout = () => {
  return (
    <div className="menu">
      <nav>
        <ul className="liste">
          <li className="colonne">
            <Link to="/">Home</Link>
          </li>
          <li className="colonne">
            <Link to="/legs">Legs</Link>
          </li>
          <li className="colonne">
            <Link to="/shoulder">Shoulder</Link>
          </li>
          <li className="colonne">
            <Link to="/chests">Chest</Link>
          </li>
          <li className="colonne">
            <Link to="/back">Back</Link>
          </li>
          <li className="colonne">
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};


export default Layout