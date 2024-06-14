import { Route, Routes } from 'react-router-dom';
import SignInPage from '../pages/Signin/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
import LandingPage from '../pages/Landing/LandingPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import MainPage from '../pages/Main/MainPage';
import Channel from '../pages/Main/Channel/Channel';
import ChannelContainer from '../components/Organisms/Content/ChannelContainer';
import MyPage from '../pages/NotFound/MyPage';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/signUp' element={<SignUpPage />} />
      <Route path='/main' element={<MainPage />}>
        <Route path='/main' element={<ChannelContainer />} />
        <Route path='/main/channel/:channelId' element={<Channel />} />
        <Route path='/main/myPage' element={<MyPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
