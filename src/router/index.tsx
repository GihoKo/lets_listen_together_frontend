// components
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage/LandingPage';
import MainPage from '@/pages/MainPage/MainPage';
import SignInPage from '@/pages/SigninPage/SignInPage';
import ChannelPage from '@/pages/ChannelPage/ChannelPage';
import PageFallBack from '@/components/Molecules/FallBack/PageFallBack';
import Content from '@/pages/MainPage/_compoenets/Content/Content';

const ProfilePage = lazy(() => import('@/pages/ProfilePage/ProfilePage'));
const EditChannelPage = lazy(() => import('@/pages/EditChannelPage/EditChannelPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage'));

export default function Router() {
  // view
  return (
    <Suspense fallback={<PageFallBack />}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signIn' element={<SignInPage />} />
        <Route path='/main' element={<MainPage />}>
          <Route path='/main' element={<Content />} />
          <Route path='/main/channel/:channelId' element={<ChannelPage />} />
          <Route path='/main/Profile' element={<ProfilePage />} />
          <Route path='/main/EditChannels' element={<EditChannelPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
