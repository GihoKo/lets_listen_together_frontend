// components
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import ChannelContainer from '@/pages/Main/_compoenets/Content/ChannelContainer';
import Channel from '@/pages/Main/Channel/Channel';
import MainPage from '@/pages/Main/MainPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import SignInPage from '@/pages/Signin/SignInPage';
import Profile from '@/pages/Main/Profile/Profile';
import EditChannels from '@/pages/Main/EditChannels/EditChannels';

export default function Router() {
  // view
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/main' element={<MainPage />}>
        <Route path='/main' element={<ChannelContainer />} />
        <Route path='/main/channel/:channelId' element={<Channel />} />
        <Route path='/main/Profile' element={<Profile />} />
        <Route path='/main/EditChannels' element={<EditChannels />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
