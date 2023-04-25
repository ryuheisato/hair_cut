import './App.css';
import AboutPage from './components/aboutPage/AboutPage';
import Header from './components/header/Header';
import HelpPage from './components/helpPage/HelpPage';
import HomePage from './components/homePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './components/topPage/TopPage';
import BoardPage from './components/boardPage/BoardPage';
import PostPage from './components/postPage/PostPage';
import { useSelector } from 'react-redux';
import Profile from './components/profile/Profile';
import ProfileSetting from './components/profile/ProfileSetting';
import UserProfile from './components/profile/UserProfile';
import PostEdit from './components/postPage/PostEdit';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  const user = useSelector((state) => state.auth.isSignedIn);
  return (
    <Router>
      <div className='App'>
        <div>
          <Header />
          <div className='body'>
            <Routes>
              <Route path='/about' element={<AboutPage />} />
              <Route path='/help' element={<HelpPage />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            {user ? (
              <Routes>
                <Route path='/home' element={<HomePage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/stylists' element={<BoardPage />} />
                <Route path='/post' element={<PostPage />} />
                <Route path='/post/edit' element={<PostEdit />} />
                <Route path='/profile/setting' element={<ProfileSetting />} />
                <Route path='/profile/:postId' element={<UserProfile />} />
              </Routes>
            ) : (
              <Routes>
                <Route path='/' element={<TopPage />} />
              </Routes>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
