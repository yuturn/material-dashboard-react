import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// 日期和時間的選單
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import {
  Box,
  Button,
  Card,
  ThemeProvider,
  createTheme,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const completedBackupTime = "2023/06/11 12:30:00";
const differentBackupTime = "2023/06/12 12:30:00";
const manualBackupTime = "2023/06/12 12:30:00";
const loading = false;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5048E5",
      light: "#828DF8",
      dark: "#7582EB",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#1a1e2b",
      paper: "#1a1e2b",
    },
    text: {
      primary: "#fff",
    },
  },
});

function RTL() {
  const [manualOpen, setManualOpen] = useState(false);
  const [backupOpen, setBackupOpen] = useState(false);
  const handleOnClick = () => {};
  const backupHandleClickOpen = () => {
    setBackupOpen(true);
  };
  const backupHandleClose = () => {
    setBackupOpen(false);
  };
  const manualHandleClickOpen = () => {
    setManualOpen(true);
  };
  const manualHandleClose = () => {
    setManualOpen(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <DashboardLayout>
        <DashboardNavbar />
        <Card>
          <CardHeader title="前次備份時間" />
          <Divider sx={{ borderBottomWidth: 3 }} />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                完整備份:{completedBackupTime}
              </Grid>
              <Grid item xs={12}>
                差異備份:{differentBackupTime}
              </Grid>
              <Grid item xs={12}>
                手動完整備份:{manualBackupTime}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="設定" />
          <Divider sx={{ borderBottomWidth: 3 }} />
          <CardContent>
            <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 1, mr: 2 }}
                  >
                    完整備份時間:
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker label="請輸入完整備份時間" />
                    </DemoContainer>
                  </LocalizationProvider>
                  <LoadingButton
                    variant="contained"
                    size="large"
                    component="span"
                    sx={{
                      borderRadius: 4,
                      justifyContent: "center",
                      letterSpacing: 3,
                      mt: 2,
                      ml: 2,
                    }}
                    loading={loading}
                    onClick={handleOnClick}
                  >
                    更改
                  </LoadingButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 1, mr: 2 }}
                  >
                    差異備份時間:
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker label="請輸入差異備份時間" />
                    </DemoContainer>
                  </LocalizationProvider>
                  <LoadingButton
                    variant="contained"
                    size="large"
                    component="span"
                    sx={{
                      borderRadius: 4,
                      justifyContent: "center",
                      letterSpacing: 3,
                      mt: 2,
                      ml: 2,
                    }}
                    loading={loading}
                    onClick={handleOnClick}
                  >
                    更改
                  </LoadingButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 1 }}
                  >
                    備份目的地1:
                  </Typography>
                  <TextField
                    label="請輸入ip位址"
                    margin="normal"
                    name="ip1"
                    id="ip1"
                    variant="outlined"
                    size="small"
                    sx={{ ml: 2 }}
                  />
                  <LoadingButton
                    variant="contained"
                    size="large"
                    component="span"
                    sx={{
                      borderRadius: 4,
                      justifyContent: "center",
                      letterSpacing: 3,
                      mt: 2,
                      ml: 2,
                    }}
                    loading={loading}
                    onClick={handleOnClick}
                  >
                    更改
                  </LoadingButton>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 2 }}
                  >
                    備份目的地2:
                  </Typography>
                  <TextField
                    label="請輸入ip位址"
                    margin="normal"
                    name="ip2"
                    id="ip2"
                    variant="outlined"
                    size="small"
                    sx={{ ml: 1 }}
                  />
                  <LoadingButton
                    variant="contained"
                    size="large"
                    component="span"
                    sx={{
                      borderRadius: 4,
                      justifyContent: "center",
                      letterSpacing: 3,
                      mt: 2,
                      ml: 2,
                    }}
                    loading={loading}
                    onClick={handleOnClick}
                  >
                    更改
                  </LoadingButton>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="手動備份" />
          <Divider sx={{ borderBottomWidth: 3 }} />
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <LoadingButton
                  variant="contained"
                  size="large"
                  component="span"
                  sx={{
                    borderRadius: 4,
                    justifyContent: "center",
                    letterSpacing: 3,
                    mt: 2,
                  }}
                  loading={loading}
                  onClick={manualHandleClickOpen}
                >
                  手動完整備份
                </LoadingButton>
                <Dialog
                  open={manualOpen}
                  onClose={manualHandleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">是否手動備份?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      按下確認按鈕後將會進行手動備份
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={manualHandleClose} autoFocus variant="contained">
                      確認
                    </Button>
                    <Button onClick={manualHandleClose} autoFocus variant="contained">
                      关闭
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 1, mr: 2 }}
                  >
                    完整備份路徑:
                  </Typography>
                  <TextField
                    label="請輸入ip位址"
                    margin="normal"
                    name="reductionip1"
                    id="reductionip1"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    pt: 2,
                  }}
                >
                  <Typography
                    variant="overline"
                    fontSize="large"
                    vertical-align="middle"
                    sx={{ mt: 1, mr: 2 }}
                  >
                    差異備份路徑:
                  </Typography>
                  <TextField
                    label="請輸入ip位址"
                    margin="normal"
                    name="reductionip1"
                    id="reductionip1"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  variant="contained"
                  size="large"
                  component="span"
                  sx={{
                    borderRadius: 4,
                    justifyContent: "center",
                    letterSpacing: 3,
                    mt: 2,
                  }}
                  loading={loading}
                  onClick={backupHandleClickOpen}
                >
                  還原
                </LoadingButton>
                <Dialog
                  open={backupOpen}
                  onClose={backupHandleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">是否進行還原?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      按下確認按鈕後將會進行還原
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={backupHandleClose} autoFocus variant="contained">
                      確認
                    </Button>
                    <Button onClick={backupHandleClose} autoFocus variant="contained">
                      关闭
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default RTL;
