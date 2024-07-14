// hooks
import { useLocation } from 'react-router-dom';

// images
import personSvg from '../../../images/svg/person.svg';
import personFocusedSvg from '../../../images/svg/person-focused.svg';
import homeSvg from '../../../images/svg/home.svg';
import homeFocusedSvg from '../../../images/svg/home-focused.svg';
import channelListSvg from '../../../images/svg/channel-iist.svg';
import channelListFocusedSvg from '../../../images/svg/channel-iist-focused.svg';

export interface SideBarNavigators {
  name: string;
  path: string;
  icon: string[] | string;
}

export default function useNavigatorContainer() {
  const location = useLocation();

  const SIDEBAR_NAVIGATORS: SideBarNavigators[] = [
    {
      name: 'Home',
      path: '/main',
      icon: [homeSvg, homeFocusedSvg], // [default, focused]
    },
    {
      name: 'MyPage',
      path: '/main/myPage',
      icon: [personSvg, personFocusedSvg],
    },
    {
      name: 'MyOwnChannels',
      path: '/main/MyOwnChannels',
      icon: [channelListSvg, channelListFocusedSvg],
    },
  ];

  return {
    location,
    SIDEBAR_NAVIGATORS,
  };
}
