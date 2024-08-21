import logger from './logger';

export const handleUnexpectedError = (error: unknown) => {
  if (error instanceof Error) {
    logger({ error, context: 'Unexpected Error' });
  }
  return;
};
