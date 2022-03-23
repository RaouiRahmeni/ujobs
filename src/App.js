import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile /Profile";
import Signin from "./components/sign-in/Signin";
import Signup from "./components/sign-up/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/signin" element={<Signin />}></Route>

          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
