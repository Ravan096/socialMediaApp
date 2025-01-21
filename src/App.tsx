import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from "react"
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
import Cam from './components/Pages/Cam';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Pages/Header';
import Homescaleton from './components/Loader/Homescaleton';
import Message from './components/Pages/Message';
import Reels from './components/Pages/Reels';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { clearError, clearMessage } from './redux/reducers/userSlice';

function App() {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state: RootState) => state.userslice);
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
        <div style={{paddingBottom:"15%"}}>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/userprofile' element={<Userprofile />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/like' element={<Like />} />
          <Route path='/cam' element={<Cam />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/message' element={<Message />} />
          <Route path='/reels' element={<Reels />} />
          <Route path='/settingsandactivity' element={<SettingActivity />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
      </Suspense>

      <Header />


      <Toaster position="top-center"
        reverseOrder={true} />
    </Router>
  )
}

export default App
