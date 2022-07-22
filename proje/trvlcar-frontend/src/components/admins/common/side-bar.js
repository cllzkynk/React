import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/img/logo/logo.png";
import "./side-bar.css";
import {
  RiHome3Line,
  RiUser3Line,
  RiCarLine,
  RiFileList3Line,
  RiLogoutCircleRLine,
  RiDashboardLine,
} from "react-icons/ri";
import { useStore } from "../../../store";
import alertify from "alertifyjs";
import { logout } from "../../../store/user/userActions";

const SideBar = () => {
  const { userState, dispatchUser } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    alertify.confirm(
      "Logout",
      "Are you sure want to logout?",
      () => {
        dispatchUser(logout());
        localStorage.removeItem("token");
        navigate("/");
      },
      () => {
        console.log("canceled");
      }
    );
  };

  return (
    <div className="admin-side-bar">
      <div><img src={logo} className="img-fluid" /></div>

      <ul>
        <li>
          <Link to="/admin">
            <RiDashboardLine /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <RiUser3Line /> User Management
          </Link>
        </li>
        <li>
          <Link to="/admin/vehicles">
            <RiCarLine /> Vehicle Management
          </Link>
        </li>
        <li>
          <Link to="/admin/reservations">
            <RiFileList3Line /> Reservation Management
          </Link>
        </li>
        <li>
          <Link to="/">
            <RiHome3Line /> Web Site
          </Link>
        </li>
        <li>
          <a onClick={handleLogout} href="#">
            <RiLogoutCircleRLine /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
