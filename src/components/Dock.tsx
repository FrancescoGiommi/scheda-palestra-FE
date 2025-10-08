import { NavLink } from "react-router-dom";

export default function Dock() {
  return (
    <>
      <nav className="dock-nav">
        <NavLink to={"/"}>
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to={"/cards"}>
          <i className="fa-solid fa-address-card"></i>
        </NavLink>
        <NavLink to={"/addCard"}>
          <i className="fa-solid fa-plus"></i>
        </NavLink>
        <NavLink to={"/profile"}>
          <i className="fa-solid fa-user"></i>
        </NavLink>
      </nav>
    </>
  );
}
