// import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import React, { useRef, useEffect } from "react";
import { apiUserLogin} from "/home/jack/桌面/code/material-dashboard-react/src/api";
import { useNavigate } from 'react-router-dom';
// import { encrypt, verify } from "/home/jack/桌面/code/material-dashboard-react/src/tools/crypt";

// Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/Foxlink-Img-2.jpg";

function Basic() {
  // const navigate = useNavigate();
  // const _isMounted = useRef(true);
  // useEffect(() => {
  //   return () => {
  //       _isMounted.current = false;
  //   }
  // }, []);
  // function handleOnClick() {
  //   try {
  //     let account = document.getElementById("account").value;
  //     let password = document.getElementById("password").value;
  //     const hashPassWord = encrypt("foxlink", "$5$rounds=10000$F0XL1NKPWDHaSH");
  //     if (account == "" || password == "") throw "帐密不可為空";
  //     apiUserLogin(`grant_type=&username=${account}&password=${hashPassWord}&scope=&client_id=123&client_secret=`)
  //       .then(res => {
  //         if (_isMounted.current) {
  //           setUser({
  //             'token': res.data['access_token'],
  //             'token_type': res.data['token_type'],
  //             'username': '',
  //             'level': '',
  //           })
  //         }
  //       })
  //       .catch(err => {
  //         let errMsg = '';
  //         if (err.response && err.response.status == 401) errMsg = '帐密错误';
  //         else if (err.response && err.response.status == 422) errMsg = '验证错误，请重试';
  //         else errMsg = '服务器拒绝连线，请联络相关人员';
  //         setAlert({
  //           'open': true,
  //           'msg': errMsg,
  //           'type': 'error'
  //         })
  //       })
  //   } catch (e) {
  //     console.log(e);
  //     setAlert({
  //         'open': true,
  //         'msg': e,
  //         'type': 'error'
  //     })
  //   }
  //   document.getElementById('account').value = "";
  //   document.getElementById('password').value = "";
  // }
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Foxlink
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="帳號" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="密碼" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                登入
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Basic;
