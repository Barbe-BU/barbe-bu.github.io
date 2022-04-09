import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="NavComponent">
      <ul>
        <NavLink to="/state" className={(nav) => nav.isActive && "nav-active"}>
          <li>State</li>
        </NavLink>
        <NavLink to="/form" className={(nav) => nav.isActive && "nav-active"}>
          <li>Formulaire</li>
        </NavLink>
      </ul>
    </div>
  );
}
