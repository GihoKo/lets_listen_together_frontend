import { LastVisitedPageType } from '@/types/enum';

const setLastVisitedPage = (lastVisitedPage: string) => {
  const lastVisitedPageString = {
    lastVisitedPage,
    timeStamp: Date.now() + LastVisitedPageType.CACHE_TIME,
  };

  localStorage.setItem('lastVisitedPage', JSON.stringify(lastVisitedPageString));
};

export default setLastVisitedPage;
