import React, { useState } from "react";
import "./EnrollStudent.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import enrollData from "./enrollData.json";

export default function EnrollStudent() {
  const [courses, setCourses] = useState([{ id: 1 }]);
  const [batches, setBatches] = useState(enrollData.initialBatches); // Initial batches from JSON
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBatch, setNewBatch] = useState({
    name: "",
    days: [],
    startTime: "",
    endTime: "",
    link: ""
  });

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1 }]);
  };

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const handleModalChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setNewBatch(prev => {
        const newDays = checked
          ? [...prev.days, value]
          : prev.days.filter(d => d !== value);
        return { ...prev, days: newDays };
      });
    } else {
      setNewBatch(prev => ({ ...prev, [name]: value }));
    }
  };

  const createBatch = () => {
    if (newBatch.name) {
      setBatches([...batches, newBatch.name]);
      setIsModalOpen(false);
      setNewBatch({ name: "", days: [], startTime: "", endTime: "", link: "" });
    }
  };

  return (
    <div className="enroll-page" role="main">
      <div className="enroll-card" aria-labelledby="enroll-heading">
        <h1 id="enroll-heading" className="title">
          Enroll a Student
        </h1>

        {/* Students Information */}
        <div className="section">
          <h2 className="section-title">Students Information</h2>
          <div className="input-wrap">
            <select className="input-box" aria-label="Select student" defaultValue="">
              <option value="" disabled>
                Select student
              </option>
              {enrollData.students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Dynamic Course Enrollments */}
        {courses.map((course, index) => (
          <div className="section" key={course.id}>
            <div className="section-header">
              <h2 className="section-title">Course Enrollment - {index + 1}</h2>
              {/* Show button on the first section , "click the add another course button", implying a specific button.  */}
              {index === 0 && (
                <button
                  className="add-btn"
                  type="button"
                  onClick={handleAddCourse}
                  aria-label="Add another course"
                >
                  + Add Another Courses
                </button>
              )}
              {index > 0 && (
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => handleDeleteCourse(course.id)}
                  aria-label="Delete course"
                >
                  <i className="bi bi-trash"></i>
                </button>
              )}
            </div>

            <div className="input-wrap">
              <select className="input-box" aria-label="Select course" defaultValue="">
                <option value="" disabled>
                  Select course
                </option>
                {enrollData.courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-wrap">
              <select className="input-box" aria-label="Select instructor" defaultValue="">
                <option value="" disabled>
                  Select instructor
                </option>
                {enrollData.instructors.map((instructor) => (
                  <option key={instructor.id} value={instructor.id}>
                    {instructor.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="batch-input-container">
              <div className="create-batch-link-wrapper">
                <a
                  href="#create"
                  className="create-batch"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                  aria-label="Create new batch"
                >
                  Create new batch
                </a>
              </div>
              <div className="input-wrap">
                <select className="input-box" aria-label="Select batch" defaultValue="">
                  <option value="" disabled>
                    Select batch
                  </option>
                  {batches.map((batch, i) => (
                    <option key={i} value={batch}>
                      {batch}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        {/* Centered enroll button */}
        <div className="center-btn">
          <button className="enroll-btn" type="button">
            Enroll Student
          </button>
        </div>
      </div>

      {/* Create Batch Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="modal-title">Create New Batch</h3>

            <div className="modal-field">
              <label className="modal-label">Batch Name</label>
              <input
                type="text"
                name="name"
                className="modal-input"
                value={newBatch.name}
                onChange={handleModalChange}
                placeholder="Enter batch name"
              />
            </div>

            <div className="modal-field">
              <label className="modal-label">Select Days</label>
              <div className="days-checkbox-group">
                {weekDays.map(day => (
                  <label key={day} className="day-checkbox">
                    <input
                      type="checkbox"
                      name="days"
                      value={day}
                      checked={newBatch.days.includes(day)}
                      onChange={handleModalChange}
                    />
                    {day}
                  </label>
                ))}
              </div>
            </div>

            <div className="modal-field" style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <label className="modal-label">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  className="modal-input"
                  value={newBatch.startTime}
                  onChange={handleModalChange}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label className="modal-label">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  className="modal-input"
                  value={newBatch.endTime}
                  onChange={handleModalChange}
                />
              </div>
            </div>

            <div className="modal-field">
              <label className="modal-label">Gmeet Link</label>
              <input
                type="text"
                name="link"
                className="modal-input"
                value={newBatch.link}
                onChange={handleModalChange}
                placeholder="https://meet.google.com/..."
              />
            </div>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="create-btn" onClick={createBatch}>
                Create Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

