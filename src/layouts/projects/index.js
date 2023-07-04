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

// @mui material components
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
import Card from "@mui/material/Card";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";

// Data
import authorsTableData from "layouts/projects/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";
import DataTable from "examples/Tables/DataTable";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Notifications() {
  const [age, setAge] = useState("");
  const [projectDeleteOpen, setProjectDeleteOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const projectDeleteHandleClickOpen = () => {
    setProjectDeleteOpen(true);
  };
  const projectDeleteHandleClose = () => {
    setProjectDeleteOpen(false);
  };

  const { columns, rows } = authorsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium">
                      新增專案
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        名稱:
                      </MDTypography>
                      <MDInput type="projec-name" label="專案名稱" />
                      <MDButton variant="gradient" color="info">
                        新增
                      </MDButton>
                    </MDBox>
                    <MDTypography variant="h4" fontWeight="medium" mt={3}>
                      刪除專案
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        專案名稱:
                      </MDTypography>
                      <MDInput type="projec-name" label="專案名稱" />
                      <MDButton
                        variant="gradient"
                        color="error"
                        onClick={projectDeleteHandleClickOpen}
                      >
                        刪除專案
                      </MDButton>
                      <Dialog
                        open={projectDeleteOpen}
                        onClose={projectDeleteHandleClose}
                        aria-labelledby="alert-dialog-permission"
                        aria-describedby="alert-dialog-permission"
                      >
                        <DialogTitle id="alert-dialog-title">是否刪除專案?</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-permission">
                            按下刪除按鈕後將會刪除專案
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <MDButton
                            onClick={projectDeleteHandleClose}
                            color="error"
                            autoFocus
                            variant="gradient"
                          >
                            刪除
                          </MDButton>
                          <MDButton
                            onClick={projectDeleteHandleClose}
                            color="info"
                            autoFocus
                            variant="gradient"
                          >
                            关闭
                          </MDButton>
                        </DialogActions>
                      </Dialog>
                    </MDBox>
                    <MDTypography variant="h4" fontWeight="medium" mt={3}>
                      編輯專案
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        專案名稱:
                      </MDTypography>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">專案</InputLabel>
                        <Select
                          labelId="permission-select-label"
                          id="permission-select"
                          value={age}
                          label="專案"
                          onChange={handleChange}
                          style={{ minWidth: "200px", height: "45px" }}
                        >
                          <MenuItem value={10}>專案 A</MenuItem>
                          <MenuItem value={20}>專案 B</MenuItem>
                          <MenuItem value={30}>專案 C</MenuItem>
                        </Select>
                      </FormControl>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        人員查詢:
                      </MDTypography>
                      <MDInput type="search-staff" label="人員查詢" />
                      <MDButton variant="gradient" color="info" ml={2}>
                        查詢
                      </MDButton>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        人員名稱:
                      </MDTypography>
                      <MDInput type="add-staff" label="人員新增" />
                      <MDButton variant="gradient" color="info" ml={2}>
                        新增
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
                <MDBox pt={6} pb={3}>
                  <Grid container spacing={6}>
                    <Grid item xs={12}>
                      <Card>
                        <MDBox
                          mx={2}
                          mt={-3}
                          py={3}
                          px={2}
                          variant="gradient"
                          bgColor="info"
                          borderRadius="lg"
                          coloredShadow="info"
                        >
                          <MDTypography variant="h5" color="white">
                            專案
                          </MDTypography>
                        </MDBox>
                        <MDBox pt={3}>
                          <DataTable
                            table={{ columns, rows }}
                            isSorted={false}
                            entriesPerPage={false}
                            showTotalEntries={false}
                            noEndBorder
                          />
                        </MDBox>
                      </Card>
                    </Grid>
                  </Grid>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Notifications;
