import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Overview from "./components/Overview/Overview";
import Courses from "./components/Courses/Courses";
import Students from "./components/Student/Students";
import Instructors from "./components/Instructor/Instructors";
import EnrollStudents from "./components/EnrollStudent/EnrollStudents";
import SyncFromZen from "./components/SyncFormZen/SyncFromZen";
import ApproveUser from "./components/ApproveUser/ApproveUser";
import CourseBuilder from "./components/CourseBuilder/CourseBuilder";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import StudentPreview from "./components/Student/StudentPreview";
import InstructorPreview from "./components/Instructor/InstructorPreview";
import InstructorBatches from "./components/Instructor/InstructorBatches";
import CourseView from "./components/CourseIcon/CourseView.jsx";
import EditCourse from "./components/CourseIcon/EditCourse.jsx";
import CourseUsers from "./components/CourseIcon/CourseUsers.jsx";
import Batches from "./components/Batches/Batches";
import BatchDetails from "./components/Batches/BatchDetails";

// AUTH COMPONENTS
import SignIn from "./components/Sign/SignIn";
import UserEnrollment from "./components/Sign/UserEnrollment";
import UserDetailView from "./components/ApproveUser/UserDetailView";


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          {/* AUTH ROUTES */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<UserEnrollment />} />

          {/* Default redirect to login instead of dashboard */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Dashboard wrapper with sidebar */}

          <Route
            path="/dashboard/*"
            element={
              <div className="layout">
                <Sidebar />
                <div className="content">
                  <Routes>
                    <Route path="/" element={<Navigate to="overview" replace />} />

                    <Route path="overview" element={<Overview />} />
                    <Route path="courses" element={<Courses />} />

                    {/* ⭐⭐ FIXED ROUTES ⭐⭐ */}
                    <Route path="course/:id" element={<CourseView />} />
                    <Route path="edit-course/:id" element={<EditCourse />} />
                    <Route path="course-users/:id" element={<CourseUsers />} />
                    {/* -------------------------------- */}

                    <Route path="students" element={<Students />} />
                    <Route path="instructors" element={<Instructors />} />
                    <Route path="enroll" element={<EnrollStudents />} />
                    <Route path="approve-users" element={<ApproveUser />} />
                    <Route path="user-detail-view" element={<UserDetailView />} />
                    <Route path="sync" element={<SyncFromZen />} />
                    <Route path="course-builder" element={<CourseBuilder />} />
                    <Route path="create-course" element={<CreateCourse />} />
                    <Route path="add-instructor" element={<UserEnrollment subtitle="Add Instructor" />} />
                    <Route path="add-student" element={<UserEnrollment subtitle="Add Student" />} />
                    <Route path="student-preview" element={<StudentPreview />} />
                    <Route path="batches" element={<Batches />} />
                    <Route path="batch-details/:id" element={<BatchDetails />} />
                    <Route path="instructor-preview" element={<InstructorPreview />} />
                    <Route path="instructor-batches" element={<InstructorBatches />} />
                  </Routes>
                </div>
              </div>
            }
          />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
