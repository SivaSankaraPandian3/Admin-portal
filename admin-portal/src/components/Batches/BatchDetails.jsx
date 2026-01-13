import React from "react";
import "./BatchDetails.css";
import {
    MdOutlineBook,
    MdOutlineVideocam,
    MdPersonOutline,
    MdOutlineCalendarToday,
    MdOutlineTimer,
    MdOutlineAccessTime,
    MdPeopleOutline,
    MdEventNote
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { batchesData } from "./batchesData";

const BatchDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the current batch data
    const batch = batchesData.find(b => b.id === parseInt(id));

    if (!batch) {
        return (
            <div className="batch-details-page">
                <div className="batch-details-header">
                    <h1>Batch not found</h1>
                    <button onClick={() => navigate("/dashboard/batches")} className="join-class-btn">Go Back</button>
                </div>
            </div>
        );
    }

    const attendanceData = [
        { date: "21/9/2025", startTime: "09:00 AM", endTime: "11:00 AM", status: "Ontime" },
        { date: "21/9/2025", startTime: "08:00 AM", endTime: "11:00 AM", status: "Early" },
        { date: "21/9/2025", startTime: "10:00 AM", endTime: "12:00 PM", status: "Late" },
        { date: "21/9/2025", startTime: "09:00 AM", endTime: "11:00 AM", status: "Ontime" },
        { date: "21/9/2025", startTime: "08:30 AM", endTime: "11:00 AM", status: "Early" },
        { date: "21/9/2025", startTime: "-", endTime: "-", status: "No Show" },
        { date: "21/9/2025", startTime: "09:00 AM", endTime: "11:00 AM", status: "Ontime" },
        { date: "21/9/2025", startTime: "09:00 AM", endTime: "11:00 AM", status: "Ontime" },
        { date: "21/9/2025", startTime: "09:00 AM", endTime: "11:00 AM", status: "Ontime" },
    ];

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case "ontime": return "status-ontime";
            case "early": return "status-early";
            case "late": return "status-late";
            case "no show": return "status-noshow";
            default: return "";
        }
    };

    return (
        <div className="batch-details-page">
            <div className="batch-details-header">
                <h1>Batches</h1>
            </div>

            {/* Batch Info Card */}
            <div className="batch-info-card">
                <div className="card-top">
                    <div className="course-title-section">
                        <MdOutlineBook className="course-book-icon" />
                        <div className="title-texts">
                            <h2>{batch.course}</h2>
                            <span>{batch.name}</span>
                        </div>
                    </div>
                    <button className="join-class-btn">
                        <MdOutlineVideocam className="cam-icon" />
                        Join Class
                    </button>
                </div>

                <div className="info-grid">
                    <div className="info-item">
                        <div className="info-icon-wrapper user-icon">
                            <MdPersonOutline />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Instructor</span>
                            <span className="info-value">{batch.instructor}</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon-wrapper calendar-icon">
                            <MdOutlineCalendarToday />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Training Days</span>
                            <span className="info-value">{batch.trainingDays}</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon-wrapper timer-icon">
                            <MdOutlineTimer />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Duration</span>
                            <span className="info-value">{batch.duration}</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon-wrapper calendar-icon">
                            <MdOutlineCalendarToday />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Start Date</span>
                            <span className="info-value">{batch.startDate}</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon-wrapper time-icon">
                            <MdOutlineAccessTime />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Class Timing</span>
                            <span className="info-value">{batch.timing}</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="info-icon-wrapper students-icon">
                            <MdPeopleOutline />
                        </div>
                        <div className="info-text">
                            <span className="info-label">Students</span>
                            <span className="info-value">{batch.studentCount}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Attendance Section */}
            <div className="attendance-container">
                <div className="attendance-header">
                    <MdEventNote className="cal-note-icon" />
                    <span>December, 2025</span>
                </div>
                <div className="attendance-table-wrapper">
                    <table className="attendance-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendanceData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.date}</td>
                                    <td>{row.startTime}</td>
                                    <td>{row.endTime}</td>
                                    <td>
                                        <span className={`attendance-badge ${getStatusClass(row.status)}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BatchDetails;
