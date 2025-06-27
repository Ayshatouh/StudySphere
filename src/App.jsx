import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/UserPages/Dashboard";
import Homepage from "./components/UserPages/Homepage"
import Profile from "./components/UserPages/Profile";
import Mycourse from "./components/UserPages/Mycourse";
import Quiz from "./components/UserPages/Quiz";
import Performance from "./components/UserPages/Performance";
import Lecture from "./components/UserPages/Lecture";
import Admindashboard from './components/AdminPages/Admindashboard';
import Tutordashboar from './components/TutorPages/Tutordashboar';
import ManageUsers from './components/AdminPages/ManageUsers';
import Reports from './components/AdminPages/Reports';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
   <AuthProvider>
 
       <Routes>
        {/* public route */}
      <Route path="/" element={<Homepage />} />
      {/* user dashboard */}
     <Route
      path="/dashboard"
      element={
        <ProtectedRoute allowaedRoles={['user']}>
          <Dashboard/>
        </ProtectedRoute>
      }
      />
      {/* admin dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowaedRoles={['admin']}>
            <Admindashboard/>
          </ProtectedRoute>
        }
      />
      <Route 
      path="/tutor/dashboard"
      element={
        <ProtectedRoute allowaedRoles={['tutor']}>
          <Tutordashboar/>
        </ProtectedRoute>
      }
      />
      {/* other routes */}
      {/* <Route path="/dashboard/" element={<Dashboard />} /> */}
      <Route path="/profile" element={<Profile/>} />
      <Route path="/course" element={<Mycourse/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/performance" element={<Performance/>} />
      <Route path="/lecture" element={<Lecture/>} />
      {/* <Route path="/admin/dashboard" element= {<Admindashboard/>}/>
      <Route path="/tutor/dashboard" element={<Tutordashboar/>}/> */}
      <Route path="/admin/manageuser" element={<ManageUsers/>}/>
      <Route path="/admin/reports" element={<Reports/>}/>
    </Routes>
  
   </AuthProvider>
  );
};

export default App;
