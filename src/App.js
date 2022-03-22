import Feed from "./components/feed/Feed";
import Profile from "./components/profile /Profile";
import Signin from "./components/sign-in/Signin";
import Signup from "./components/sign-up/Signup";

function App() {
  return (
    <div className="App">
      <span className="title">uJOBS</span>
      <input type="text" placeholder="chababa" />
      <Feed />
    </div>
  );
}

export default App;
