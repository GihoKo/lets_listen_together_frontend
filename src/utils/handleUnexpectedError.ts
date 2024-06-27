export const handleUnexpectedError = (error: unknown) => {
  if (error instanceof Error) {
    console.error('알 수 없는 오류입니다.');
  }
  return;
};
