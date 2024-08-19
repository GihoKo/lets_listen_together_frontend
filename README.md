# 같이 듣자

## 아키텍쳐
![image](https://github.com/user-attachments/assets/a67c8def-be3a-4147-9e20-e22f26ff3d6d)

## 소개
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

**문제 정의**
- 사용자의 인증을 관리하는 과정에서 **RefreshToken**과 **AccessToken**의 저장 및 관리 방식에 대해 고민하게 됨.

**원인 분석**
- **로컬 스토리지**와 **세션 스토리지**는 자바스크립트를 통해 접근이 가능해 XSS 공격에 취약함.
- **쿠키**는 XSS와 CSRF 공격에 대해 HttpOnly, Secure, SameSite 등의 속성을 통해 어느 정도 방어할 수 있지만, 여전히 위험성이 존재함. 특히 **AccessToken**이 탈취될 경우 보안에 큰 위협이 됨.
- **클로저**를 사용하면 내부 상태에 직접 접근할 수 없도록 하여 쿠키보다 노출 가능성이 적음. 그러나 RefreshToken을 클로저에 저장할 경우, 새로고침 시 데이터가 사라져 다시 로그인을 해야 하는 문제가 발생함.

**해결 과정**
1. **RefreshToken**
    - **쿠키**에 저장하여 새로고침 시에도 유지되도록 하고, HttpOnly, Secure, SameSite 속성으로 보안을 강화함.
2. **AccessToken**
    - **클로저**에 저장하여 외부에서 접근할 수 없도록 보호함. 새로고침 시에는 **RefreshToken**을 이용해 **AccessToken**을 다시 발급받음.
    - 클로저를 구현 코드
    - ![끌로저](https://github.com/user-attachments/assets/1543033b-9d6a-4d65-83ac-b29754e5befd)
        
    - 새로 고침시 재발급 받는 코드
    - ![woqkfrmq](https://github.com/user-attachments/assets/f62c94ee-56e0-4f1e-b927-98230e0905db)

**결론**
- RefreshToken은 쿠키에, AccessToken은 클로저에 관리함으로써 보안성을 높이고, 실용적인 인증 관리 방식을 구현함.
