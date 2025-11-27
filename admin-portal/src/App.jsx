import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import Courses from "./components/Courses";
import EnrollStudents from "./components/EnrollStudents";
import Students from "./components/Students";
import Instructors from "./components/Instructors";
import ApproveUser from "./components/ApproveUser";
import SyncFromZen from "./components/SyncFromZen";
import Logout from "./components/Logout";

function App() {
  return (
    <div className={`layout`}>
      <Sidebar />

      <div className="content-wrapper">
        <main className="content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/enroll" element={<EnrollStudents />} />
            <Route path="/students" element={<Students />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/approve-users" element={<ApproveUser />} />
            <Route path="/sync" element={<SyncFromZen />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;   
