export interface YouTubeVideo {
  kind: string; // "youtube#videoListResponse"
  etag: string;
  items: YouTubeVideoItem[]; // YouTubeVideoItem 객체의 배열 (일반적으로 특정 비디오에 대해 하나의 아이템만 포함됨)
  pageInfo: PageInfo;
}

interface YouTubeVideoItem {
  kind: string; // "youtube#video"
  etag: string;
  id: string; // 비디오 ID
  snippet: Snippet;
}

interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage: string;
  description: string;
  liveBroadcastContent: string;
  localized: Localized;
  publishedAt: string; // ISO 8601 날짜 형식
  tags: string[]; // 태그의 배열
  thumbnails: Thumbnails;
  title: string;
}

interface Localized {
  title: string;
  description: string;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
