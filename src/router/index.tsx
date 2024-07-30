// components
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import SignInPage from '@/pages/Signin/SignInPage';
import MainPage from '@/pages/Main/MainPage';
import Channel from '@/pages/Main/Channel/Channel';
import ChannelContainer from '@/pages/Main/_compoenets/Content/ChannelContainer';
const Profile = React.lazy(() => import('@/pages/Main/Profile/Profile'));
const EditChannels = React.lazy(() => import('@/pages/Main/EditChannels/EditChannels'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFound/NotFoundPage'));

export default function Router() {
  // view
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}
