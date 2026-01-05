import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import ApplyJob from "./components/ApplyJob";
import AppContext from "./Context/AppContext";
import RecruiterLogin from "./components/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import ManageJobs from "./pages/ManageJobs";
import AddJob from "./pages/AddJob";
import ViewApplications from "./pages/ViewApplications";
import "quill/dist/quill.snow.css";
function App() {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div className="">
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="view-applications" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
