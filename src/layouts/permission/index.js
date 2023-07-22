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

import { useState } from "react";

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// import MDLoadingButton from "components/MDLoadingButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// Authentication layout components
// import BasicLayout from "layouts/authentication/components/BasicLayout";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Images
// import Button from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";
// import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [age, setAge] = useState("");
  const [permissionOpen, setPermissionOpen] = useState(false);
  const [permissionDeleteOpen, setPermissionDeleteOpen] = useState(false);
  // const loading = false;

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const permissionHandleClickOpen = () => {
    setPermissionOpen(true);
  };
  const permissionHandleClose = () => {
    setPermissionOpen(false);
  };
  const permissionDeleteHandleClickOpen = () => {
    setPermissionDeleteOpen(true);
  };
  const permissionDeleteHandleClose = () => {
    setPermissionDeleteOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium">
                      新增人員
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        名稱:
                      </MDTypography>
                      <MDInput type="staff" label="Staff" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        帳號:
                      </MDTypography>
                      <MDInput type="account" label="Account" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        密碼:
                      </MDTypography>
                      <MDInput type="password" label="Password" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        權限:
                      </MDTypography>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">權限</InputLabel>
                        <Select
                          labelId="permission-select-label"
                          id="permission-select"
                          value={age}
                          label="權限"
                          onChange={handleChange}
                          style={{ minWidth: "200px", height: "45px" }}
                        >
                          <MenuItem value={10}>一般員工</MenuItem>
                          <MenuItem value={20}>專案負責人</MenuItem>
                          <MenuItem value={30}>專案管理者</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDButton variant="gradient" color="info">
                        新增
                      </MDButton>
                    </MDBox>
                    <MDBox mt={3} mb={1} textAlign="center">
                      <MDTypography variant="button" color="text">
                        {/* Don&apos;t have an account?{" "} */}
                        {/* <MDTypography
                          component={Link}
                          to="/authentication/sign-up"
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          Sign up
                        </MDTypography> */}
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium">
                      編輯人員
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        帳號:
                      </MDTypography>
                      <MDBox mr={2}>
                        <MDInput type="account" label="Account" />
                      </MDBox>
                      <MDButton variant="gradient" color="info" ml={2}>
                        查詢
                      </MDButton>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        名稱: 王得發
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        權限:
                      </MDTypography>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">權限</InputLabel>
                        <Select
                          labelId="permission-select-label"
                          id="permission-select"
                          value={age}
                          label="權限"
                          onChange={handleChange}
                          style={{ minWidth: "200px", height: "45px" }}
                        >
                          <MenuItem value={10}>一般員工</MenuItem>
                          <MenuItem value={20}>專案負責人</MenuItem>
                          <MenuItem value={30}>專案管理者</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                    <MDBox mt={4} mb={1}>
                      <MDBox display="flex" justifyContent="space-between" alignItems="center">
                        <MDButton
                          variant="gradient"
                          color="info"
                          onClick={permissionHandleClickOpen}
                        >
                          更改權限
                        </MDButton>
                        <MDButton
                          variant="gradient"
                          color="error"
                          onClick={permissionDeleteHandleClickOpen}
                        >
                          刪除人員
                        </MDButton>
                      </MDBox>
                      <Dialog
                        open={permissionOpen}
                        onClose={permissionHandleClose}
                        aria-labelledby="alert-dialog-permission"
                        aria-describedby="alert-dialog-permission"
                      >
                        <DialogTitle id="alert-dialog-title">是否更改權限?</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-permission">
                            按下確認按鈕後將會進行權限更改
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <MDButton
                            onClick={permissionHandleClose}
                            color="info"
                            autoFocus
                            variant="gradient"
                          >
                            確認
                          </MDButton>
                          <MDButton
                            onClick={permissionHandleClose}
                            color="info"
                            autoFocus
                            variant="gradient"
                          >
                            关闭
                          </MDButton>
                        </DialogActions>
                      </Dialog>
                      <Dialog
                        open={permissionDeleteOpen}
                        onClose={permissionDeleteHandleClose}
                        aria-labelledby="alert-dialog-permission"
                        aria-describedby="alert-dialog-permission"
                      >
                        <DialogTitle id="alert-dialog-title">是否刪除人員?</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-permission">
                            按下刪除按鈕後將會刪除人員
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <MDButton
                            onClick={permissionDeleteHandleClose}
                            color="error"
                            autoFocus
                            variant="gradient"
                          >
                            刪除
                          </MDButton>
                          <MDButton
                            onClick={permissionDeleteHandleClose}
                            color="info"
                            autoFocus
                            variant="gradient"
                          >
                            关闭
                          </MDButton>
                        </DialogActions>
                      </Dialog>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Basic;
