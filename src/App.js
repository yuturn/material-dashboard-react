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

import { useState, useEffect, useMemo } from "react";

// react-router components
// import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate, useLocation, Router } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Pages
// import Login from './layouts/authentication/sign-in/index.js';

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
// import { from } from "stylis";
// 更改首頁順序
// import Login from './layouts/authentication/sign-in/index';
// import SignUp from './layouts/authentication/sign-up/index';
// import Dashboard from "./layouts/dashboard/index.js";
// import Statistics from "./Statistics";
// import QrcodeDownload from "./Qrcode";
// import Map from "./Map";
// import DevicesUpload from "./DevicesUpload";
// import WorkerinfoUpload from "./WorkinfoUpload";
// import MapUpload from "./MapUpload";
// import WhiteList from "./WhiteList";
// import ENRMission from "./OtherMission";

export default function App() {
  // const [alert, setAlert] = useState({
  //   'open': false,
  //   'type': '',
  //   'msg': '',
  //   'duration': 3000
  // });
  // // user auth
  // const [authUser, setAuthUser] = useState({
  //     'token': null,
  //     'token_type': null,
  //     'username': null,
  //     'level': null,
  // });

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Foxlink"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Router>
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </Router>
        {/* <Router>
          <Routes>
              <Route element={<Login setAlert={setAlert} setUser={setAuthUser} />} path={'/login'}></Route>
              <Route element={<SignUp authUser={authUser} />} path={'/'}>
                  <Route element={<Dashboard token={authUser.token} setAlert={setAlert} />} path={'/all-status'}></Route>
                  <Route element={<WorkerinfoUpload setAlert={setAlert} token={authUser.token} />} path={'/worker-info-upload'}></Route>
                  <Route element={<DevicesUpload token={authUser.token} />} path={'/devices-upload'}></Route>
                  <Route element={<Statistics token={authUser.token} setAlert={setAlert} />} path={'/statistics'}></Route>
                  <Route element={<QrcodeDownload token={authUser.token} />} path={'/qrcode-download'}></Route>
                  <Route element={<Map setAlert={setAlert} token={authUser.token} />} path={'/map'}></Route>
                  <Route element={<MapUpload token={authUser.token} />} path={'/map-upload'}></Route>
                  <Route element={<WhiteList token={authUser.token} />} path={'/white-list'}></Route>
                  <Route element={<ENRMission token={authUser.token} />} path={'/ENRMission'}></Route>
              </Route>
              <Route
                  path='*'
                  element={
                      <Navigate to="/login" replace />
                  }
              />
          </Routes>
        </Router> */}
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Foxlink"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
