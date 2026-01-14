import React, { useState, useEffect } from "react";
import "./InstructorBatches.css";
import { useLocation, useNavigate } from "react-router-dom";
import { MdCalendarMonth, MdOutlineAccessTime, MdPeopleOutline, MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import batchesData from "./instructorBatchesData.json";

const InstructorBatches = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const instructor = location.state?.instructor;

    const [batches, setBatches] = useState([]);
    // Change to array to allow multiple open batches
    const [expandedBatches, setExpandedBatches] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("January");

    useEffect(() => {
        // In a real app, we might filter by instructor ID here
        setBatches(batchesData);
    }, []);

    const toggleBatch = (batchId) => {
        setExpandedBatches(prev => {
            if (prev.includes(batchId)) {
                return prev.filter(id => id !== batchId);
            } else {
                return [...prev, batchId];
            }
        });
    };

    const isExpanded = (batchId) => expandedBatches.includes(batchId);

    const getAttendanceClass = (status) => {
        switch (status) {
            case "On Time": return "status-ontime";
            case "Late": return "status-late";
            case "Early": return "status-early";
            default: return "";
        }
    };

    return (
        <div className="instructor-batches-page">
            <div className="ib-header">
                <h1>{location.state?.title || "Instructor Management"}</h1>
            </div>

            {/* Batch Cards */}
            {batches.map((batch) => (
                <div key={batch.id} className="ib-card">
                    <div className="ib-card-header">
                        <div className="ib-batch-info">
                            <h3>{batch.batchName}</h3>
                            <div className="ib-batch-meta">
                                <MdCalendarMonth className="meta-icon" />
                                <span>Starts {batch.startDate}</span>
                                <span className="meta-dot">•</span>
                                <span>{batch.sessions} Sessions</span>
                            </div>
                        </div>
                        <button
                            className={`ib-show-details-btn ${isExpanded(batch.id) ? 'expanded' : ''}`}
                            onClick={() => toggleBatch(batch.id)}
                        >
                            Show Details
                            {isExpanded(batch.id) ? <MdKeyboardArrowUp className="arrow" /> : <MdKeyboardArrowDown className="arrow" />}
                        </button>
                    </div>

                    {isExpanded(batch.id) && (
                        <div className="ib-expanded-content">
                            {/* Stats Row */}
                            <div className="ib-stats-row">
                                <div className="ib-stat-box">
                                    <span className="ib-stat-label">Total Days</span>
                                    <span className="ib-stat-value">{String(batch.stats.totalDays).padStart(2, '0')}</span>
                                </div>
                                <div className="ib-stat-box">
                                    <span className="ib-stat-label">Days Completed</span>
                                    <span className="ib-stat-value">{String(batch.stats.daysCompleted).padStart(2, '0')}</span>
                                </div>
                                <div className="ib-stat-box">
                                    <span className="ib-stat-label">Leave Taken</span>
                                    <span className="ib-stat-value">{String(batch.stats.leaveTaken).padStart(2, '0')}</span>
                                </div>
                                <div className="ib-month-selector">
                                    <select
                                        value={selectedMonth}
                                        onChange={(e) => setSelectedMonth(e.target.value)}
                                    >
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                    </select>
                                    <span className="dropdown-arrow">▼</span>
                                </div>
                            </div>

                            {/* Batch Details Table */}
                            <div className="ib-table-container">
                                <table className="ib-table">
                                    <thead>
                                        <tr>
                                            <th>Batch Name</th>
                                            <th>Class Date</th>
                                            <th>Time</th>
                                            <th>Students</th>
                                            <th>Attendance Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {batch.details.map((detail, index) => (
                                            <tr key={index}>
                                                <td>{detail.batchName}</td>
                                                <td>
                                                    <div className="date-cell">
                                                        <MdCalendarMonth className="cell-icon" />
                                                        {detail.classDate}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="time-cell">
                                                        <MdOutlineAccessTime className="cell-icon" />
                                                        {detail.time}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="students-cell">
                                                        <MdPeopleOutline className="cell-icon" />
                                                        {detail.students}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`ib-attendance-badge ${getAttendanceClass(detail.attendanceStatus)}`}>
                                                        <span className="badge-dot"></span>
                                                        {detail.attendanceStatus}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InstructorBatches;
