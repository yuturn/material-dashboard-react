/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
// import MDBadge from "components/MDBadge";

// Images
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "員工姓名/編號", accessor: "author", width: "30%", align: "left" },
      // { Header: "function", accessor: "function", align: "left" },
      { Header: "操作紀錄", accessor: "status", align: "center" },
      // { Header: "employed", accessor: "employed", align: "center" },
      // { Header: "編輯", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author name="John Michael" email="C001" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDTypography variant="h7" fontWeight="medium" pl={1}>
              新增人員
            </MDTypography>
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDButton variant="gradient" color="error" alignItems="right">
            刪除
          </MDButton>
        ),
      },
      {
        author: <Author name="Alexa Liras" email="C002" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDTypography variant="h7" fontWeight="medium" pl={1}>
              刪除專案
            </MDTypography>
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDButton variant="gradient" color="error" alignItems="right">
            刪除
          </MDButton>
        ),
      },
      {
        author: <Author name="Laurent Perrier" email="C003" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDTypography variant="h7" fontWeight="medium" pl={1}>
              設定差異備份,手動備份,新增專案人員
            </MDTypography>
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDButton variant="gradient" color="error" alignItems="right">
            刪除
          </MDButton>
        ),
      },
      {
        author: <Author name="Michael Levi" email="C004" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDTypography variant="h7" fontWeight="medium" pl={1}>
              更改完整備份時間,設定備份目的地1,設定備份目的地2,設定備份目的地1,還原
            </MDTypography>
          </MDBox>
        ),
        employed: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDButton variant="gradient" color="error" alignItems="right">
            刪除
          </MDButton>
        ),
      },
    ],
  };
}
