import { ErrorMessagesType } from '@/types/enum';

interface ValidateChannelDataProps {
  channelData: { name: string; tags: string[]; description: string; image: string };
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

type ValidateChannelData = ({ channelData, setErrorMessage }: ValidateChannelDataProps) => boolean;

const validateChannelData: ValidateChannelData = ({ channelData, setErrorMessage }) => {
  if (channelData.name.trim() === '') {
    setErrorMessage(ErrorMessagesType.CHANNEL_NAME_EMPTY);
    return false;
  }

  if (channelData.tags.length === 0) {
    setErrorMessage(ErrorMessagesType.CHANNEL_TAG_EMPTY);
    return false;
  }

  if (channelData.description.trim() === '') {
    setErrorMessage(ErrorMessagesType.CHANNEL_DESCRIPTION_EMPTY);
    return false;
  }
  return true;
};

export default validateChannelData;
