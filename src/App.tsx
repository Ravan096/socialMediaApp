import { Suspense, lazy, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homescaleton from './components/Loader/Homescaleton';
import Cam from './components/Pages/Cam';
import FriendsList from './components/Pages/FriendsList';
import Header from './components/Pages/Header';
import Message from './components/Pages/Message';
import Reels from './components/Pages/Reels';
import StoryContainer from './components/Pages/StoryContainer ';
import { meAsync } from "./redux/actions/userAction";
import { useAppDispatch } from './redux/hooks';
import { clearError, clearMessage } from './redux/reducers/userSlice';
import { RootState } from './redux/store';
import { SocketProvider } from './socket';
import ProtectedRoute from "./lib/ProtectedRoute";
const ForgotPassword = lazy(() => import("./components/Pages/ForgotPassword"));
const Home = lazy(() => import("./components/Pages/Home"));
const Login = lazy(() => import("./components/Pages/Login"));
const Profile = lazy(() => import("./components/Pages/Profile"));
const SignUp = lazy(() => import("./components/Pages/SignUp"));
const Userprofile = lazy(() => import("./components/Pages/Userprofile"));
const Chat = lazy(() => import("./components/Pages/Chat"));
const Explore = lazy(() => import("./components/Pages/Explore"));
const Like = lazy(() => import("./components/Pages/Like"));
const Search = lazy(() => import("./components/Pages/Search"));
const EditProfile = lazy(() => import("./components/Pages/EditProfile"));
const PageNotFound = lazy(() => import("./components/Pages/PageNotFound"));
const SettingActivity = lazy(() => import("./components/Pages/SettingActivity"));
const Photos = lazy(() => import("./components/Pages/Photos"));

function App() {
  const dispatch = useAppDispatch();
  const { error, message, user } = useSelector((state: RootState) => state.userslice);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      dispatch(meAsync({ args: '' }));
    }
  }, [])
  const hideNav = ['/', 'forgotpassword', 'signup'];
  const currentLocation = window.location.pathname;
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError())
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage())
    }
  }, [error, message])
  return (
    <Router>
      <Suspense fallback={<Homescaleton />}>
        <div style={{ paddingBottom: "15%" }}>
          <Routes>
            <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/profile/:userId' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path='/photos' element={<ProtectedRoute><Photos /></ProtectedRoute>} />
            <Route path='/userlist' element={<ProtectedRoute><FriendsList /></ProtectedRoute>} />
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/userprofile' element={<ProtectedRoute><Userprofile /></ProtectedRoute>} />
            <Route path='/explore' element={<ProtectedRoute><Explore /></ProtectedRoute>} />
            <Route path='/chat/:chatId' element={
              <ProtectedRoute>
                <SocketProvider>
                  <Chat />
                </SocketProvider>
              </ProtectedRoute>

            } />
            <Route path='/like' element={<ProtectedRoute><Like /></ProtectedRoute>} />
            <Route path='/cam' element={<ProtectedRoute><Cam /></ProtectedRoute>} />
            <Route path='/editprofile' element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
            <Route path='/search' element={<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path='/message' element={
              <ProtectedRoute>
                <SocketProvider>
                  <Message />
                </SocketProvider>
              </ProtectedRoute>
            } />
            <Route path='/reels' element={<ProtectedRoute><Reels /></ProtectedRoute>} />
            <Route path='/settingsandactivity' element={<ProtectedRoute><SettingActivity /></ProtectedRoute>} />
            <Route path='/story' element={<ProtectedRoute><StoryContainer /></ProtectedRoute>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Suspense>

      {
        !hideNav.includes(currentLocation) && <Header />
      }



      <Toaster position="top-center"
        reverseOrder={true} />
    </Router>
  )
}

export default App
