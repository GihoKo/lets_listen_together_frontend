// components
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import ChannelContainer from '@/pages/Main/_compoenets/Content/ChannelContainer';
import Channel from '@/pages/Main/Channel/Channel';
import MainPage from '@/pages/Main/MainPage';
import MyOwnChannels from '@/pages/Main/MyOwnChannels/MyOwnChannels';
import MyProfile from '@/pages/Main/MyProfile/MyProfile';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';
import SignInPage from '@/pages/Signin/SignInPage';

export default function Router() {
  // view
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/signIn' element={<SignInPage />} />
      <Route path='/main' element={<MainPage />}>
        <Route path='/main' element={<ChannelContainer />} />
        <Route path='/main/channel/:channelId' element={<Channel />} />
        <Route path='/main/myProfile' element={<MyProfile />} />
        <Route path='/main/myOwnChannels' element={<MyOwnChannels />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}
