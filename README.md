# 같이 듣자

## 아키텍쳐

![image](https://github.com/user-attachments/assets/a67c8def-be3a-4147-9e20-e22f26ff3d6d)

## 소개

![1](https://github.com/user-attachments/assets/367bc9f9-6178-47a1-a0ed-a12c297485b7)
![dd](https://github.com/user-attachments/assets/feb3b5ad-9a37-434e-a971-6f3da23789b6)

- 유튜브 기반 음악 플레이리스트 웹 어플리케이션
- 1인 개발
- 음악 들으면서 런닝 뛰는 것이 취미인데 유튜브 프리미엄을 구독할 여유가 없어서 직접 개발

## 주요 기능

- 로그인, 회원가입
- 음악 플레이리스트 채널 생성, 수정, 삭제, 구독 기능
- 음악 추가, 수정, 삭제, 순서 변경 기능

## 설치 방법

### 사전 요구 사항

- **Node.js**: 20.12.2 이상
- **MySQL**: 8.0 이상

### 설치

1. 프론트엔드 및 백엔드 레포지토리 클론

```bash
git clone https://github.com/GihoKo/lets_listen_together_frontend.git
```

```bash
git clone https://github.com/GihoKo/lets_listen-together_backend.git
```

2. 의존성 설치

```bash
npm install
```

3. 백엔드에서 Prisma를 이용해 데이터베이스 업데이트

```bash
npx prisma migrate dev --name init
```

4. 프론트엔드 및 백엔드 실행

```bash
npm run dev
```

## 문제 및 해결


