/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/Foxlink-Img-2.jpg";
// Path /home/jack/桌面/code/material-dashboard-react/src/layouts/authentication/sign-up/index.js
import { apiCreateUser, apiPendingApprovalUser } from "/home/jack/桌面/code/material-dashboard-react/src/api";
import Header from "layouts/LOG/components/Header";

export default function SignUp() {
  function handleOnClick() {
    try {
      const name = document.getElementById("name").value;
      const acc = document.getElementById("account").value;
      const passwd = document.getElementById("password").value;
      // if (name === "" || acc === "" || passwd === "") { throw "帐密不可為空" };
      const temp_data = {
        "badge": name,
        "username": acc,
        "password": passwd
      };
      const data = JSON.stringify(temp_data)
      fetch('http://192.168.0.115/users/pending-approval-user', {
        method: 'POST',
        body: data,
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      console.log(data)
      // apiPendingApprovalUser(data);
    } catch (e) {
      console.log(e);
      // setAlert({
      //   open: true,
      //   msg: e,
      //   type: "error",
      };
    document.getElementById("name").value = "";
    document.getElementById("account").value = "";
    document.getElementById("password").value = "";
  }
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            帳號申請
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            請輸入姓名、員工ID(帳號)、密碼
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="姓名" variant="standard" id="name" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="account" label="員工ID" variant="standard" id="account" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="密碼" variant="standard" id="password" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" onClick={handleOnClick} fullWidth>
                提出申請
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                如果有你帳號了按右方連結回到登入頁面{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  登入頁面
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}
