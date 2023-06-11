// import { useEffect } from "react";

// @mui material components
// import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/rtl/data/reportsBarChartData";
// import reportsLineChartData from "layouts/rtl/data/reportsLineChartData";

// RTL components
// import Projects from "layouts/rtl/components/Projects";
// import OrdersOverview from "layouts/rtl/components/OrdersOverview";

// Material Dashboard 2 React contexts
// import { useMaterialUIController, setDirection } from "context";

import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import {
  Card,
  ThemeProvider,
  createTheme,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const completedBackupTime = "2023/06/11";
const differentBackupTime = "2023/06/12";
const manualBackupTime = "2023/06/12";

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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  完整備份時間
                  <TextField
                    label="請輸入備份時間,152359"
                    margin="normal"
                    name="fullbackup"
                    id="fullbackup"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  差異備份時間
                  <TextField
                    label="請輸入備份時間,152359"
                    margin="normal"
                    name="diffbackup"
                    id="diffbackup"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                  備份目的地1:
                  <TextField
                    label="請輸入備份時間,152359"
                    margin="normal"
                    name="ip1"
                    id="ip1"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                  備份目的地2:
                  <TextField
                    label="請輸入備份時間,152359"
                    margin="normal"
                    name="ip2"
                    id="ip2"
                    variant="outlined"
                    size="small"
                  />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {/* <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="dark"
                  icon="weekend"
                  title="أموال اليوم"
                  count={281}
                  percentage={{
                    color: "success",
                    amount: "+55%",
                    label: "من الأسبوع الماضي",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  icon="leaderboard"
                  title="مستخدمو اليوم"
                  count="2,300"
                  percentage={{
                    color: "success",
                    amount: "+3%",
                    label: "من الأسبوع الماضي",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="success"
                  icon="store"
                  title="عملاء جدد"
                  count="34k"
                  percentage={{
                    color: "success",
                    amount: "+1%",
                    label: "من الشهر الماضي",
                  }}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <MDBox mb={1.5}>
                <ComplexStatisticsCard
                  color="primary"
                  icon="person_add"
                  title="مبيعات"
                  count="+91"
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "مقارنة بيوم أمس",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
          <MDBox mt={4.5}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsBarChart
                    color="info"
                    title="مشاهدات الموقع"
                    description="آخر أداء للحملة"
                    date="الحملة أرسلت قبل يومين"
                    chart={reportsBarChartData}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="success"
                    title="المبيعات اليومية"
                    description={
                      <>
                        (<strong>+15%</strong>) زيادة في مبيعات اليوم..
                      </>
                    }
                    date="تم التحديث منذ 4 دقائق"
                    chart={sales}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <MDBox mb={3}>
                  <ReportsLineChart
                    color="dark"
                    title="المهام المكتملة"
                    description="آخر أداء للحملة"
                    date="تم تحديثه للتو"
                    chart={tasks}
                  />
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={8}>
                <Projects />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <OrdersOverview />
              </Grid>
            </Grid>
          </MDBox> */}
        {/* <Footer /> */}
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default RTL;
