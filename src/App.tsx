import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/landingpage/LandingPage";
import Signup from "./components/signup/Signup";
import Login from "./components/Login.tsx/Login";

function App() {
  return (
    <div>
      <Navbar />
      {/* <LandingPage /> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
