// hooks
import useUpdateChannel from '@/apis/hooks/useUpdateChannel';
import { useState } from 'react';
import { useChannelEditorProps } from './ChannelEditor.type';

export default function useChannelEditor({ setEdittedChannel, EdittedChannel }: useChannelEditorProps) {
  if (!EdittedChannel) return null;

  const upLoadUpdateChannelMutate = useUpdateChannel();
  const [tagValue, setTagValue] = useState<string>('');

  const handleChangeTagValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagValue(e.target.value);
  };

  const handleDeleteTag = (tag: string) => {
    setEdittedChannel({
      ...EdittedChannel,
      tags: EdittedChannel.tags.filter((t) => t !== tag),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    upLoadUpdateChannelMutate.mutate({
      channelId: EdittedChannel.id,
      channel: EdittedChannel,
    });
  };

  const handleAddTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (
        tagValue === '' ||
        tagValue.length > 10 ||
        EdittedChannel?.tags.length > 5 ||
        EdittedChannel?.tags.includes(tagValue)
      )
        return;

      setEdittedChannel({
        ...EdittedChannel,
        tags: [...EdittedChannel.tags, tagValue],
      });
      setTagValue('');
    }
  };

  const handleChangeChannelData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdittedChannel({
      ...EdittedChannel,
      [e.target.name]: e.target.value,
    });
  };

  return {
    tagValue,
    handleChangeTagValue,
    handleDeleteTag,
    handleSubmit,
    handleAddTagKeyDown,
    handleChangeChannelData,
  };
}
