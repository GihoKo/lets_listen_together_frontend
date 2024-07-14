export default function useSignInPage() {
  const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;

  return { CLIENT_ID };
}
