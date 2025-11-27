import React from "react";
import "./Courses.css"; // optional if you have styles

const Courses = () => {
  return (
    <div className="container-fluid">

      <h2 className="mb-3">Courses</h2>

      <div className="dashboard-card p-4">
        <table className="table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Date</th>
              <th>Students Enrolled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>RPA</td>
              <td>John</td>
              <td>20/01/2025</td>
              <td>10</td>
            </tr>
            <tr>
              <td>AWS Cloud</td>
              <td>Mezin</td>
              <td>28/01/2025</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Courses;
