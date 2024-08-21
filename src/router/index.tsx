// components
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import MainPage from '@/pages/Main/MainPage';
import ChannelContainer from '@/pages/Main/_compoenets/Content/ChannelContainer';
import SignInPage from '@/pages/Signin/SignInPage';
import ChannelPage from '@/pages/ChannelPage/ChannelPage';
import PageFallBack from '@/components/Molecules/PageFallBack';

const Profile = lazy(() => import('@/pages/Main/Profile/Profile'));
const EditChannels = lazy(() => import('@/pages/Main/EditChannels/EditChannels'));
const NotFoundPage = lazy(() => import('@/pages/NotFound/NotFoundPage'));

export default function Router() {
  // view
  return (
    <Suspense fallback={<PageFallBack />}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/main' element={<MainPage />}>
          <Route path='/main' element={<ChannelContainer />} />
          <Route path='/main/channel/:channelId' element={<ChannelPage />} />
          <Route path='/main/Profile' element={<Profile />} />
          <Route path='/main/EditChannels' element={<EditChannels />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
