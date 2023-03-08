import './App.css';
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import HelpPage from './components/HelpPage';
import HomePage from './components/HomePage';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TopPage from './components/TopPage';
import BoardPage from './components/BoardPage';
import PostPage from './components/PostPage';
import ProfilePage from './components/ProfilePage';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth.user)
  console.log(user);
  return (
    <Router>
      <div className="App">
        <div>            
          <Header />
          {user ? (
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path='/stylists' element={<BoardPage />} />
              <Route path='/post' element={<PostPage />} />
            </Routes>
          ):(
            <Routes>
              <Route path='/' element={<TopPage />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
