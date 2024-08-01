import { ErrorMessagesType } from '@/types/enum';
import React from 'react';

interface ValidateTagProps {
  tagValue: string;
  channelData: { tags: string[] };
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

type ValidateTage = ({ tagValue, channelData, setErrorMessage }: ValidateTagProps) => boolean;

const validateTag: ValidateTage = ({ tagValue, channelData, setErrorMessage }) => {
  if (tagValue.trim() === '') {
    setErrorMessage(ErrorMessagesType.TAG_EMPTY);
    return false;
  }

  if (tagValue.length > 10) {
    setErrorMessage(ErrorMessagesType.TAG_LENGTH);
    return false;
  }

  if (channelData.tags.length >= 5) {
    setErrorMessage(ErrorMessagesType.TAG_LIMIT);
    return false;
  }

  if (channelData.tags.includes(tagValue)) {
    setErrorMessage(ErrorMessagesType.TAG_DUPLICATE);
    return false;
  }
  return true;
};

export default validateTag;
