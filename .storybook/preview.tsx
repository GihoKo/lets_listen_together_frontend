// 모든 스토리에 적용할 설정을 하는 파일이다.
import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';
import { MemoryRouter } from 'react-router-dom';

const preview: Preview = {
  // parameters : 스토리의 전역적인 설정을 담당하는 객체이다.
  parameters: {
    // controls : 특정 패턴을 가진 props를 컨트롤 가능하게 만든다.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // actions : "on"으로 시작하는 모든 props를 액션으로 등록
    actions: { argTypesRegex: '^on.*' },
    // backgrounds : 스토리의 배경색을 변경할 수 있다.
    backgrounds: {
      default: 'var(--grey-grey100)',
    },
    // layout : 스토리 배치를 변경할 수 있다.
    layout: 'centered',
    // tags : 스토리를 스토리북 UI에서 포함하거나 제외할 수 있다(필터링 기능).
    tag: ['autodocs'],
  },
  // decorators : 전역적으로 스토리에 추가적인 렌더링을 적용할 수 있다.
  decorators: [
    (Story) => (
      <>
        {/* MemoryRouter는 메모리 내에서 URL을 관리하는 라우터이다. 브라우저의 표시줄을 변경하지 않으므로 테스트나 스토리북에서 사용하기 좋다.*/}
        <MemoryRouter>
          <Story />
          {/* GlobalStyles로 전역 스타일 적용 */}
          <GlobalStyles />
        </MemoryRouter>
      </>
    ),
  ],
};

export default preview;
