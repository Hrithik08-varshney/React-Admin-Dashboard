import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const listArr = [
  {
    id: 1,
    icon: <GroupIcon className="icon" />,
    spanName: "Users",
    link: "/users",
  },
  {
    id: 2,
    icon: <ShoppingBagIcon className="icon" />,
    spanName: "Products",
    link: "/products",
  },
  {
    id: 3,

    icon: <CreditCardIcon className="icon" />,
    spanName: "Orders",
    link: "",
  },
  {
    id: 4,
    icon: <LocalShippingIcon className="icon" />,
    spanName: "Delivery",
    link: "",
  },
];
const usefulArr = [
  {
    id: 1,
    icon: <QueryStatsIcon className="icon" />,
    spanName: "Stats",
  },
  {
    id: 2,
    icon: <NotificationsIcon className="icon" />,
    spanName: "Notifications",
  },
];

const serviceArr = [
  {
    id: 1,

    icon: <SettingsSystemDaydreamIcon className="icon" />,
    spanName: "System Health",
  },
  {
    id: 2,

    icon: <PsychologyIcon className="icon" />,
    spanName: "Logs",
  },
  {
    id: 3,

    icon: <SettingsIcon className="icon" />,
    spanName: "Settings",
  },
];
const userArr = [
  {
    id: 1,

    icon: <AccountBoxIcon className="icon" />,
    spanName: "Profile",
  },
  {
    id: 2,

    icon: <LogoutIcon className="icon" />,
    spanName: "Logout",
  },
];

export default function Sidebar() {
  const {dispatch}=useContext(DarkModeContext);


  return (
    <div className="Sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Admin Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          {listArr?.map((item) => {
            return (
              <Link
                key={item.id + item.spanName}
                style={{ textDecoration: "none" }}
                to={item?.link}
              >
                <li>
                  {item.icon}
                  <span>{item.spanName}</span>
                </li>
              </Link>
            );
          })}
          <p className="title">USEFUL</p>
          {usefulArr.map((item, index) => {
            return (
              <li key={index + item}>
                {item.icon}
                <span>{item.spanName}</span>
              </li>
            );
          })}
          <p className="title">SERVICE</p>
          {serviceArr.map((item, index) => {
            return (
              <li key={index + item}>
                {item.icon}
                <span>{item.spanName}</span>
              </li>
            );
          })}
          <p className="title">USER</p>
          {userArr.map((item, index) => {
            return (
              <li key={index + item}>
                {item.icon}
                <span>{item.spanName}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}
