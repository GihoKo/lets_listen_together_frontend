interface ApiCallCounter {
  increment: () => void;
  getCount: () => number;
}

const createApiCallCounter = (): ApiCallCounter => {
  let count = 0;

  return {
    increment: () => count++,
    getCount: () => count,
  };
};

const apiCallCounter = createApiCallCounter();

export default apiCallCounter;
