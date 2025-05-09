import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserProfile from "./pages/UserProfile";
import AddUser from "./pages/AddUser";
import { UserProvider } from "./context/userContext";

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  </UserProvider>
);

export default App;
