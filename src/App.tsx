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
import Users from "./components/users/Users";
import QuestionsPage from "./components/questionsPage/QuestionsPage";
import QuestionForm from "./components/questionForm/QuestionForm";
import UserProfile from "./components/userProfile/UserProfile";
import QuestionAndAnswerPage from "./components/questionAndAnswerPage/QuestionAndAnswerPage";
import Tags from "./components/TagsPage/Tags";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/fetchUser/fetchUserSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

// Though we do not need App.jsx file but i just wanted to use it (I don't know why :|).
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser() as any);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="homepage"
          element={<ProtectedRoute Component={Homepage} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="users" element={<ProtectedRoute Component={Users} />} />
        <Route path="tags" element={<ProtectedRoute Component={Tags} />} />

        {/* this is going to be a dynamic route (will use user's id as parameter) so that we can fetch user's profile*/}
        <Route
          path="users/user"
          element={<ProtectedRoute Component={UserProfile} />}
        />

        <Route
          path="questions"
          element={<ProtectedRoute Component={QuestionsPage} />}
        />
        <Route
          path="questions/ask"
          element={<ProtectedRoute Component={QuestionForm} />}
        />

        {/* this is going to be a dynamic route */}
        <Route
          path="questions/:id"
          element={<ProtectedRoute Component={QuestionAndAnswerPage} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
