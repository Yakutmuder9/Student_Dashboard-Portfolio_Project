import "./Dashboard.css";
import { Routes, Route } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Activity from "./Pages/Activity/Activity";
import Course from "./Pages/Course_page/Course";
import Event from "./Pages/Event_page/Event";
import Inbox from "./Pages/Inbox_page/Inbox";
import Resources from "./Pages/Resource_page/Resources";
import Profile from "./Pages/Profile_page/Profile";
import Help from "./Pages/Help/Help";

const Dashboard = ({authorised}) => {
  // const [component, setComponent] = useState(
  //   {sideNavetogler.slice(0,1).toUpperCase() + sideNavetogler.slice(1, sideNavetogler.length)}
  // )
  let navigat = useNavigate();
  let { sideNavetogler } = useParams();

  if(!authorised){
    return <Help />
  }

  

  return (
    <div className="Dash d-flex">
      <div className="d-none d-xl-block" id="LeftSide">
        <SideNav />
      </div>

      <div className="col ps-3 pe-3" id="rightSide">
        <Header />

        {/* --------Start the main dody component that rerendered in every routes --------*/}
        <div className="dhashboardConatainer w-100 h-100 bg-primary">
          <>
          <Routes>
             <Route path="activity" element={<Activity />} />
             <Route path="courses" element={<Course />} />
            <Route path="event" element={<Event />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
          </Routes>
         
            {/* {(sideNavetogler.slice(0,1).toUpperCase() + sideNavetogler.slice(1, sideNavetogler.length)) ? <Activity/>:<Course />} */}
          </>
        </div>
        {/* --------End the main dody component that rerendered in every routes --------*/}

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
