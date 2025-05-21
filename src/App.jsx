import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from "./components/UserPages/Dashboard";
import Homepage from "./components/UserPages/Homepage"
import Profile from "./components/UserPages/Profile";
import Mycourse from "./components/UserPages/Mycourse";
import Quiz from "./components/UserPages/Quiz";
import Performance from "./components/UserPages/Performance";
import Lecture from "./components/UserPages/Lecture";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dashboard/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/course" element={<Mycourse/>} />
      <Route path="/quiz" element={<Quiz/>} />
      <Route path="/performance" element={<Performance/>} />
      <Route path="/lecture" element={<Lecture/>} />
    </Routes>
  );
};

export default App;
