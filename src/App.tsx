import "./App.css";
import LandingPage from "./components/landingpage/LandingPage";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./Root";
import Homepage from "./components/homepage/Homepage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<LandingPage />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

// Though we do not need App.jsx file but i just wanted to use it (I don't know why :|).
function App() {
  return <RouterProvider router={router} />;
}

export default App;
