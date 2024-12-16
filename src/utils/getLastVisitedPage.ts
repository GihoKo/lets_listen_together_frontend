export interface LastVisitedPage {
  ['lastVisitedPage']: string;
  ['timeStamp']: number;
}

type GetLastVisitedPage = () => string;

const getLastVisitedPage: GetLastVisitedPage = (): string => {
  const lastVisitedPage: LastVisitedPage = JSON.parse(localStorage.getItem('lastVisitedPage') || '{}');

  if (lastVisitedPage.timeStamp > Date.now()) {
    return lastVisitedPage.lastVisitedPage;
  }

  localStorage.removeItem('lastVisitedPage');

  return '/main';
};

export default getLastVisitedPage;
