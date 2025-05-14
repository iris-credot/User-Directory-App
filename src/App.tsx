import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserProfile from "./pages/UserProfile";
import AddUser from "./pages/AddUser";


const App = () => (
  <div className="w-screen flex justify-center items-center">
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  </div>
 
);

export default App;
