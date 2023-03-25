import "./App.css";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import HelpPage from "./components/HelpPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopPage from "./components/TopPage";
import BoardPage from "./components/BoardPage";
import PostPage from "./components/PostPage";
import { useSelector } from "react-redux";
import Profile from "./components/Profile";
import ProfileSetting from "./components/ProfileSetting";
import UserProfile from "./components/UserProfile";

function App() {
  const user = useSelector((state) => state.auth.isSignedIn);
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          <div className="body">
            {user ? (
              <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/help" element={<HelpPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stylists" element={<BoardPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/profile/setting" element={<ProfileSetting />} />
                <Route path="/profile/:postId" element={<UserProfile />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<TopPage />} />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
