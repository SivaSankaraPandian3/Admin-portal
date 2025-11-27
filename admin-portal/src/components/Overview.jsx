import React from "react";
import "./Overview.css";   // IMPORTANT: dashboard styles
import "bootstrap/dist/css/bootstrap.min.css";

const Overview = () => {
  return (
    <div className="dashboard-container">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">Dashboard Overview</h2>
          <p className="dashboard-subtitle">
            Welcome back! Here's what's happening with your platform.
          </p>
        </div>

        <button className="btn-generate">Generate Report</button>
      </div>

      {/* Top Stats */}
      <div className="stats-row">
        <div className="stats-card">
          <div className="icon-box orange"><i className="bi bi-book"></i></div>
          <h5>Total Courses</h5>
          <p className="value">63</p>
        </div>

        <div className="stats-card">
          <div className="icon-box green"><i className="bi bi-person-video"></i></div>
          <h5>Total Instructor</h5>
          <p className="value">49</p>
        </div>

        <div className="stats-card">
          <div className="icon-box pink"><i className="bi bi-mortarboard"></i></div>
          <h5>Total Students</h5>
          <p className="value">233</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-row">
        {/* Bar Chart */}
        <div className="chart-card">
          <h5 className="chart-title">Monthly Enrollments</h5>
          <img src="/chart.png" alt="chart" className="chart-img" />
        </div>

        {/* Donut Chart */}
        <div className="chart-card">
          <h5 className="chart-title">User Distribution</h5>
          <img src="/donut.png" alt="donut" className="donut-img" />
        </div>
      </div>

      {/* Tables Section */}
      <div className="tables-row">

        {/* Courses */}
        <div className="table-card">
          <h5>Recent Courses</h5>

          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Date</th>
                <th>Students</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RPA</td>
                <td>-</td>
                <td>-</td>
                <td>10</td>
              </tr>
              <tr>
                <td>AWS</td>
                <td>-</td>
                <td>-</td>
                <td>18</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Students */}
        <div className="table-card">
          <h5>Recent Students</h5>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sanjay</td>
                <td>sanjay@xyz.com</td>
                <td>25/11/2025</td>
              </tr>
              <tr>
                <td>Mezin</td>
                <td>mezin@xyz.com</td>
                <td>14/11/2025</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Overview;
