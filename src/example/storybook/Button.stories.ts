import { Meta, StoryObj } from '@storybook/react/*';

import Button from './Button';

// 스토리의 메타데이터를 정의한다.
const meta = {
  // 스토리의 제목을 정의한다.
  title: 'Example/Button',
  // 스토리의 기본 컴포넌트를 정의한다.
  component: Button,
  // 스토리의 액션, 배경색, 배치 등을 정의한다.
  parameters: {},
  // 스토리를 스토리북의 UI에서 필터링할 수 있다.
  tags: ['autodocs'],
  // 컴포넌트의 props를 정의한다.
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['confirm', 'close'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>; // satisfies는 Button 컴포넌트가 Meta를 만족하는지 검사한다.

export default meta;

type Story = StoryObj<typeof meta>; // StoryObj는 meta를 만족하는 Story를 만든다.

export const Confirm: Story = {
  args: {
    children: '확인',
    variant: 'confirm',
    type: 'button',
    onClick: () => console.log('clicked'),
  },
};

export const Close: Story = {
  args: {
    children: '닫기',
    variant: 'close',
    type: 'button',
    onClick: () => console.log('clicked'),
  },
};
