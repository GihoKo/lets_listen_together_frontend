function extractYouTubeVideoId(url: string | undefined): string | null {
  if (!url) return null;

  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname;

    if (hostname === 'youtu.be') {
      return urlObj.pathname.slice(1);
    }

    if (hostname === 'www.youtube.com' || hostname === 'youtube.com') {
      const params = new URLSearchParams(urlObj.search);
      return params.get('v');
    }

    return null;
  } catch (e) {
    console.error('Invalid URL', e);
    return null;
  }
}

export default extractYouTubeVideoId;
