import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import Grid from "@mui/material/Grid";
import { useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

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

import { Card } from "@mui/material";

const completedBackupTime = "2023/06/11 12:30:00";
const differentBackupTime = "2023/06/12 12:30:00";
const manualBackupTime = "2023/06/12 12:30:00";

function RTL() {
  const [manualOpen, setManualOpen] = useState(false);
  const [backupOpen, setBackupOpen] = useState(false);
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
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium">
                      前次備份時間
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        完整備份時間:{completedBackupTime}
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        差異備份時間:{differentBackupTime}
                      </MDTypography>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        手動備份時間:{manualBackupTime}
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} md={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium">
                      設定
                    </MDTypography>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        完整備份時間:
                      </MDTypography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateTimePicker"]}>
                          <DateTimePicker label="請輸入完整備份時間" />
                        </DemoContainer>
                      </LocalizationProvider>
                      <MDBox ml={2}>
                        <MDButton variant="gradient" color="info">
                          更改
                        </MDButton>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        差異備份時間:
                      </MDTypography>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DateTimePicker"]}>
                          <DateTimePicker label="請輸入差異備份時間" />
                        </DemoContainer>
                      </LocalizationProvider>
                      <MDBox ml={2}>
                        <MDButton variant="gradient" color="info">
                          更改
                        </MDButton>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        備份目的地1:
                      </MDTypography>
                      <MDInput type="password" label="Password" />
                      <MDBox ml={2}>
                        <MDButton variant="gradient" color="info">
                          更改
                        </MDButton>
                      </MDBox>
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        備份目的地2:
                      </MDTypography>
                      <MDInput type="password" label="Password" />
                      <MDBox ml={2}>
                        <MDButton variant="gradient" color="info">
                          更改
                        </MDButton>
                      </MDBox>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <MDTypography variant="h4" fontWeight="medium" mb={2}>
                      手動備份
                    </MDTypography>
                    <MDButton variant="gradient" color="info" onClick={manualHandleClickOpen}>
                      手動完整備份
                    </MDButton>
                    <Dialog
                      open={manualOpen}
                      onClose={manualHandleClose}
                      aria-labelledby="alert-dialog-manual"
                      aria-describedby="alert-dialog-manual"
                    >
                      <DialogTitle id="alert-dialog-title">是否手動備份?</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-manual">
                          按下確認按鈕後將會進行手動備份
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <MDButton onClick={manualHandleClose} autoFocus variant="contained">
                          確認
                        </MDButton>
                        <MDButton onClick={manualHandleClose} autoFocus variant="contained">
                          关闭
                        </MDButton>
                      </DialogActions>
                    </Dialog>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        完整備份路徑:
                      </MDTypography>
                      <MDInput type="password" label="請輸入IP位址" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDTypography variant="h5" fontWeight="medium" mr={2}>
                        差異備份路徑:
                      </MDTypography>
                      <MDInput type="password" label="請輸入IP位址" />
                    </MDBox>
                    <MDBox display="flex" alignItems="center" pt={3} px={2}>
                      <MDButton variant="gradient" color="info" onClick={backupHandleClickOpen}>
                        還原
                      </MDButton>
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
                          <MDButton onClick={backupHandleClose} autoFocus variant="contained">
                            確認
                          </MDButton>
                          <MDButton onClick={backupHandleClose} autoFocus variant="contained">
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
    // <ThemeProvider theme={darkTheme}>
    //   <DashboardLayout>
    //     <DashboardNavbar />
    //     <Card>
    //       <CardHeader title="前次備份時間" />
    //       <Divider sx={{ borderBottomWidth: 3 }} />
    //       <CardContent>
    //         <Grid container spacing={3}>
    //           <Grid item xs={12}>
    //             完整備份:{completedBackupTime}
    //           </Grid>
    //           <Grid item xs={12}>
    //             差異備份:{differentBackupTime}
    //           </Grid>
    //           <Grid item xs={12}>
    //             手動完整備份:{manualBackupTime}
    //           </Grid>
    //         </Grid>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader title="設定" />
    //       <Divider sx={{ borderBottomWidth: 3 }} />
    //       <CardContent>
    //         <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 1, mr: 2 }}
    //               >
    //                 完整備份時間:
    //               </Typography>
    //               <LocalizationProvider dateAdapter={AdapterDayjs}>
    //                 <DemoContainer components={["DateTimePicker"]}>
    //                   <DateTimePicker label="請輸入完整備份時間" />
    //                 </DemoContainer>
    //               </LocalizationProvider>
    //               <LoadingButton
    //                 variant="contained"
    //                 size="large"
    //                 component="span"
    //                 sx={{
    //                   borderRadius: 4,
    //                   justifyContent: "center",
    //                   letterSpacing: 3,
    //                   mt: 2,
    //                   ml: 2,
    //                 }}
    //                 loading={loading}
    //                 onClick={handleOnClick}
    //               >
    //                 更改
    //               </LoadingButton>
    //             </Box>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 1, mr: 2 }}
    //               >
    //                 差異備份時間:
    //               </Typography>
    //               <LocalizationProvider dateAdapter={AdapterDayjs}>
    //                 <DemoContainer components={["DateTimePicker"]}>
    //                   <DateTimePicker label="請輸入差異備份時間" />
    //                 </DemoContainer>
    //               </LocalizationProvider>
    //               <LoadingButton
    //                 variant="contained"
    //                 size="large"
    //                 component="span"
    //                 sx={{
    //                   borderRadius: 4,
    //                   justifyContent: "center",
    //                   letterSpacing: 3,
    //                   mt: 2,
    //                   ml: 2,
    //                 }}
    //                 loading={loading}
    //                 onClick={handleOnClick}
    //               >
    //                 更改
    //               </LoadingButton>
    //             </Box>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 1 }}
    //               >
    //                 備份目的地1:
    //               </Typography>
    //               <TextField
    //                 label="請輸入ip位址"
    //                 margin="normal"
    //                 name="ip1"
    //                 id="ip1"
    //                 variant="outlined"
    //                 size="small"
    //                 sx={{ ml: 2 }}
    //               />
    //               <LoadingButton
    //                 variant="contained"
    //                 size="large"
    //                 component="span"
    //                 sx={{
    //                   borderRadius: 4,
    //                   justifyContent: "center",
    //                   letterSpacing: 3,
    //                   mt: 2,
    //                   ml: 2,
    //                 }}
    //                 loading={loading}
    //                 onClick={handleOnClick}
    //               >
    //                 更改
    //               </LoadingButton>
    //             </Box>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 2 }}
    //               >
    //                 備份目的地2:
    //               </Typography>
    //               <TextField
    //                 label="請輸入ip位址"
    //                 margin="normal"
    //                 name="ip2"
    //                 id="ip2"
    //                 variant="outlined"
    //                 size="small"
    //                 sx={{ ml: 1 }}
    //               />
    //               <LoadingButton
    //                 variant="contained"
    //                 size="large"
    //                 component="span"
    //                 sx={{
    //                   borderRadius: 4,
    //                   justifyContent: "center",
    //                   letterSpacing: 3,
    //                   mt: 2,
    //                   ml: 2,
    //                 }}
    //                 loading={loading}
    //                 onClick={handleOnClick}
    //               >
    //                 更改
    //               </LoadingButton>
    //             </Box>
    //           </Grid>
    //         </Grid>
    //       </CardContent>
    //     </Card>
    //     <Card>
    //       <CardHeader title="手動備份" />
    //       <Divider sx={{ borderBottomWidth: 3 }} />
    //       <CardContent>
    //         <Grid container spacing={4}>
    //           <Grid item xs={12}>
    //             <LoadingButton
    //               variant="contained"
    //               size="large"
    //               component="span"
    //               sx={{
    //                 borderRadius: 4,
    //                 justifyContent: "center",
    //                 letterSpacing: 3,
    //                 mt: 2,
    //               }}
    //               loading={loading}
    //               onClick={manualHandleClickOpen}
    //             >
    //               手動完整備份
    //             </LoadingButton>
    //             <Dialog
    //               open={manualOpen}
    //               onClose={manualHandleClose}
    //               aria-labelledby="alert-dialog-title"
    //               aria-describedby="alert-dialog-description"
    //             >
    //               <DialogTitle id="alert-dialog-title">是否手動備份?</DialogTitle>
    //               <DialogContent>
    //                 <DialogContentText id="alert-dialog-description">
    //                   按下確認按鈕後將會進行手動備份
    //                 </DialogContentText>
    //               </DialogContent>
    //               <DialogActions>
    //                 <Button onClick={manualHandleClose} autoFocus variant="contained">
    //                   確認
    //                 </Button>
    //                 <Button onClick={manualHandleClose} autoFocus variant="contained">
    //                   关闭
    //                 </Button>
    //               </DialogActions>
    //             </Dialog>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 1, mr: 2 }}
    //               >
    //                 完整備份路徑:
    //               </Typography>
    //               <TextField
    //                 label="請輸入ip位址"
    //                 margin="normal"
    //                 name="reductionip1"
    //                 id="reductionip1"
    //                 variant="outlined"
    //                 size="small"
    //               />
    //             </Box>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "row",
    //                 pt: 2,
    //               }}
    //             >
    //               <Typography
    //                 variant="overline"
    //                 fontSize="large"
    //                 vertical-align="middle"
    //                 sx={{ mt: 1, mr: 2 }}
    //               >
    //                 差異備份路徑:
    //               </Typography>
    //               <TextField
    //                 label="請輸入ip位址"
    //                 margin="normal"
    //                 name="reductionip1"
    //                 id="reductionip1"
    //                 variant="outlined"
    //                 size="small"
    //               />
    //             </Box>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <LoadingButton
    //               variant="contained"
    //               size="medium"
    //               component="span"
    //               sx={{
    //                 borderRadius: 4,
    //                 justifyContent: "center",
    //                 letterSpacing: 3,
    //                 mt: 2,
    //                 text: "white",
    //               }}
    //               color="primary"
    //               loading={loading}
    //               onClick={backupHandleClickOpen}
    //             >
    //               還原
    //             </LoadingButton>
    //             <Dialog
    //               open={backupOpen}
    //               onClose={backupHandleClose}
    //               aria-labelledby="alert-dialog-title"
    //               aria-describedby="alert-dialog-description"
    //             >
    //               <DialogTitle id="alert-dialog-title">是否進行還原?</DialogTitle>
    //               <DialogContent>
    //                 <DialogContentText id="alert-dialog-description">
    //                   按下確認按鈕後將會進行還原
    //                 </DialogContentText>
    //               </DialogContent>
    //               <DialogActions>
    //                 <Button onClick={backupHandleClose} autoFocus variant="contained">
    //                   確認
    //                 </Button>
    //                 <Button onClick={backupHandleClose} autoFocus variant="contained">
    //                   关闭
    //                 </Button>
    //               </DialogActions>
    //             </Dialog>
    //           </Grid>
    //         </Grid>
    //       </CardContent>
    //     </Card>
    //   </DashboardLayout>
    // </ThemeProvider>
  );
}

export default RTL;
