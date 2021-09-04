import "./sidebar.css";

import DashboardIcon from "@material-ui/icons/Dashboard";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
//import PersonIcon from "@material-ui/icons/Person";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="assets/logo/erhLogo2.jpeg" alt="" />
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <NavLink as="li" exact to="/main" className="sidebarListItem">
            <DashboardIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Dashboard</span>
          </NavLink>

          <NavLink as="li" exact to="/manage" className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Manage </span>
          </NavLink>
          <NavLink
            as="li"
            to="/request"
            className="sidebarListItem"
            activeClassName="active"
          >
            <NotificationsActiveIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Request</span>
          </NavLink>

          <li className="sidebarListItem">
            <ExitToAppIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
        </ul>

        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
