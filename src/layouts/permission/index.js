import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
// Authentication layout components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  CardContent, LinearProgress,
  Typography, Button
} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Basic() {
  const [age, setAge] = useState("");
  const [permissionOpen, setPermissionOpen] = useState(false);
  const [permissionDeleteOpen, setPermissionDeleteOpen] = useState(false);
  // const loading = false;

  const CONTENT = {
    title: "註冊人員名單",
  }
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

  useEffect(() => {
    handleOnClick();
  }, [])
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleOnClick() {
    try {
      fetch('http://192.168.0.115/users/pending-approvals-list', {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIlVVSUQiOm51bGwsImV4cCI6MTY5MDI5NzE5OX0.LZWcoZaQ2olQlVM9cAB__gi-ud_nNA4qjHV0maJ2S2Y',
        }
      })
      .then(response => response.json())
      .then(data => {
        const display = data.map(
          register => {
            return (
              <Card sx={{
                m: 1, minWidth: "500px"
              }}
                key={register.id}>
                <CardContent>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="overline"
                    fontSize="large"
                  >
                    员工编号 : {register.badge}
                  </Typography>
                  <Typography>
                    员工姓名 : {register.username}
                  </Typography>
                  <Typography>
                    申請日期 : {register.created_date}
                  </Typography>
                </CardContent>
              </Card>
            )
          }
        )
        setData(display);
        console.log(display);
      })
    } catch (e) {
      console.log(e);
    };
  }

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
                      註冊人員名單:
                    </MDTypography>
                    <MDBox mt={3} mb={1} textAlign="center">
                      <MDTypography variant="button" color="text">
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                  <MDBox display="flex" alignItems="center" pt={3} px={2}>
                    <MDButton variant="gradient" color="info" onClick={handleClickOpen} ml={2}>
                      查詢
                    </MDButton>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      sx={{ width: '100%' }}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {CONTENT.title}
                      </DialogTitle>
                      <DialogContent>
                        {
                          data
                        }
                      </DialogContent>
                      <DialogActions >
                        <Button onClick={handleClose} autoFocus variant="contained">
                          关闭
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
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
                    <MDBox mt={4} mb={1}>
                      <MDBox display="flex" justifyContent="space-between" alignItems="center">
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
