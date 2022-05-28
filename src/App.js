import { Routes, Route } from "react-router-dom";
import LoginPage from "./HomePage/LoginModal/LoginModal";
import ErrorPage from "./ErrorPage/ErrorPage";
import Dashboard from "./Dashboard/Dashboard";
import HomePage from "./HomePage/HomePage";
import Activity from "./Dashboard/Pages/Activity/Activity";
import Course from "./Dashboard/Pages/Course_page/Course";
import Event from "./Dashboard/Pages/Event_page/Event";
import Inbox from "./Dashboard/Pages/Inbox_page/Inbox";
import Resources from "./Dashboard/Pages/Resource_page/Resources";
import Profile from "./Dashboard/Pages/Profile_page/Profile";
import Help from "./Dashboard/Pages/Help/Help";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="dashboard" element={<Dashboard authorised={true}/>}>
            <Route path="activity" element={<Activity />} />
            <Route path="courses" element={<Course />} />
            <Route path="event" element={<Event />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
