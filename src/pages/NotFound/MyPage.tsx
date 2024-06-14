import styled from 'styled-components';

export default function MyPage() {
  return (
    <Wrapper>
      <UserInfoForm>
        <Top>
          <ProfileImageBox></ProfileImageBox>
          <EditButton>Edit</EditButton>
        </Top>
        <Bottom>
          <NickNameLabel>Nickname</NickNameLabel>
          <NickNameInput />
          <DescriptionLabel>Description</DescriptionLabel>
          <DescriptionTextArea />
        </Bottom>
      </UserInfoForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;
`;

const UserInfoForm = styled.form`
  border: 1px solid black;
  border-radius: 12px;
  width: 360px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

const ProfileImageBox = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 160px;
  height: 160px;

  overflow: hidden;
`;

const EditButton = styled.button`
  border: 1px solid black;
  border-radius: 8px;
  width: 64px;
  height: 32px;

  padding: 4px;

  cursor: pointer;
`;

const Bottom = styled.div`
  border: 1px solid black;
  border-radius: 12px;

  display: flex;
  flex-direction: column;

  padding: 24px;
`;

const NickNameLabel = styled.label``;

const NickNameInput = styled.input`
  border: 1px solid black;
  border-radius: 8px;

  padding: 12px;

  margin-top: 16px;
  outline: none;
`;

const DescriptionLabel = styled.label`
  margin-top: 16px;
`;

const DescriptionTextArea = styled.textarea`
  border: 1px solid black;
  border-radius: 8px;
  width: 100%;
  height: 150px;

  padding: 12px;

  margin-top: 16px;

  resize: none;
  outline: none;
`;
