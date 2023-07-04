/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Equiments from "layouts/equiments";
import Materials from "layouts/materials";
import Backup from "layouts/backup";
import Projects from "layouts/projects";
import LOG from "layouts/LOG";
import Permission from "layouts/permission";
// import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "機台狀態",
    key: "Equiments",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/Equiments",
    component: <Equiments />,
  },
  {
    type: "collapse",
    name: "耗材狀態",
    key: "Materials",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/Materials",
    component: <Materials />,
  },
  {
    type: "collapse",
    name: "備份頁面",
    key: "backup",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/backup",
    component: <Backup />,
  },
  {
    type: "collapse",
    name: "權限控管",
    key: "permission",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/permission",
    component: <Permission />,
  },
  {
    type: "collapse",
    name: "專案頁面",
    key: "project",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/projects",
    component: <Projects />,
  },
  {
    type: "collapse",
    name: "Log查詢頁面",
    key: "LOG",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/LOG",
    component: <LOG />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <SignUp />,
  // },
];

export default routes;
