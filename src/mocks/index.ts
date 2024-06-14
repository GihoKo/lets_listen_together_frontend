import { Channel } from '../components/types/interface';
import { ChatMessage, MusicInterface } from '../pages/Main/Channel/_types/interface';

export const myChannelMocks: Channel[] = [
  {
    id: '1',
    name: 'CHANNEL 1',
    image: '',
  },
  {
    id: '2',
    name: 'CHANNEL 2',
    image: '',
  },
  {
    id: '3',
    name: 'CHANNEL 3',
    image: '',
  },
  {
    id: '4',
    name: 'CHANNEL 4',
    image: '',
  },
  {
    id: '5',
    name: 'CHANNEL 5',
    image: '',
  },
];

export const channelMocks: Channel[] = [
  {
    id: '1',
    name: 'Tech Talk',
    image: 'https://example.com/images/techtalk.jpg',
    description: 'A channel dedicated to the latest in technology.',
    ChannelUsers: ['user1', 'user2', 'user3'],
    createdAt: '2023-01-01T12:00:00Z',
    tags: ['technology', 'gadgets', 'innovation'],
  },
  {
    id: '2',
    name: 'Fitness Freaks',
    image: 'https://example.com/images/fitnessfreaks.jpg',
    description: 'Your daily dose of fitness and health tips.',
    ChannelUsers: ['user4', 'user5'],
    createdAt: '2023-02-15T08:30:00Z',
    tags: ['fitness', 'health', 'workout'],
  },
  {
    id: '3',
    name: 'Cooking Corner',
    image: 'https://example.com/images/cookingcorner.jpg',
    description: 'Delicious recipes and cooking tips from around the world.',
    ChannelUsers: ['user6', 'user7', 'user8', 'user9'],
    createdAt: '2023-03-10T14:45:00Z',
    tags: ['cooking', 'recipes', 'food'],
  },
  {
    id: '4',
    name: 'Book Club',
    image: 'https://example.com/images/bookclub.jpg',
    description: 'Join us to discuss our latest book picks.',
    ChannelUsers: ['user10', 'user11'],
    createdAt: '2023-04-05T16:20:00Z',
    tags: ['books', 'reading', 'literature'],
  },
  {
    id: '5',
    name: 'Travel Diaries',
    image: 'https://example.com/images/traveldiaries.jpg',
    description: 'Share your travel experiences and tips.',
    ChannelUsers: ['user12', 'user13', 'user14'],
    createdAt: '2023-05-22T11:00:00Z',
    tags: ['travel', 'adventure', 'exploration'],
  },
  {
    id: '6',
    name: 'Music Mania',
    image: 'https://example.com/images/musicmania.jpg',
    description: 'Discuss the latest hits and all-time classics.',
    ChannelUsers: ['user15', 'user16', 'user17', 'user18', 'user19'],
    createdAt: '2023-06-01T10:30:00Z',
    tags: ['music', 'songs', 'albums'],
  },
  {
    id: '7',
    name: 'Movie Buffs',
    image: 'https://example.com/images/moviebuffs.jpg',
    description: 'All about movies - reviews, news, and discussions.',
    ChannelUsers: ['user20', 'user21'],
    createdAt: '2023-07-14T09:15:00Z',
    tags: ['movies', 'films', 'cinema'],
  },
  {
    id: '8',
    name: 'Art and Design',
    image: 'https://example.com/images/artdesign.jpg',
    description: 'A space for artists and designers to share their work.',
    ChannelUsers: ['user22', 'user23', 'user24'],
    createdAt: '2023-08-19T13:00:00Z',
    tags: ['art', 'design', 'creativity'],
  },
  {
    id: '9',
    name: 'Tech Talk',
    image: 'https://example.com/images/techtalk.jpg',
    description: 'A channel dedicated to the latest in technology.',
    ChannelUsers: ['user1', 'user2', 'user3'],
    createdAt: '2023-01-01T12:00:00Z',
    tags: ['technology', 'gadgets', 'innovation'],
  },
  {
    id: '10',
    name: 'Fitness Freaks',
    image: 'https://example.com/images/fitnessfreaks.jpg',
    description: 'Your daily dose of fitness and health tips.',
    ChannelUsers: ['user4', 'user5'],
    createdAt: '2023-02-15T08:30:00Z',
    tags: ['fitness', 'health', 'workout'],
  },
  {
    id: '11',
    name: 'Cooking Corner',
    image: 'https://example.com/images/cookingcorner.jpg',
    description: 'Delicious recipes and cooking tips from around the world.',
    ChannelUsers: ['user6', 'user7', 'user8', 'user9'],
    createdAt: '2023-03-10T14:45:00Z',
    tags: ['cooking', 'recipes', 'food'],
  },
  {
    id: '12',
    name: 'Book Club',
    image: 'https://example.com/images/bookclub.jpg',
    description: 'Join us to discuss our latest book picks.',
    ChannelUsers: ['user10', 'user11'],
    createdAt: '2023-04-05T16:20:00Z',
    tags: ['books', 'reading', 'literature'],
  },
  {
    id: '13',
    name: 'Travel Diaries',
    image: 'https://example.com/images/traveldiaries.jpg',
    description: 'Share your travel experiences and tips.',
    ChannelUsers: ['user12', 'user13', 'user14'],
    createdAt: '2023-05-22T11:00:00Z',
    tags: ['travel', 'adventure', 'exploration'],
  },
  {
    id: '14',
    name: 'Music Mania',
    image: 'https://example.com/images/musicmania.jpg',
    description: 'Discuss the latest hits and all-time classics.',
    ChannelUsers: ['user15', 'user16', 'user17', 'user18', 'user19'],
    createdAt: '2023-06-01T10:30:00Z',
    tags: ['music', 'songs', 'albums'],
  },
  {
    id: '15',
    name: 'Movie Buffs',
    image: 'https://example.com/images/moviebuffs.jpg',
    description: 'All about movies - reviews, news, and discussions.',
    ChannelUsers: ['user20', 'user21'],
    createdAt: '2023-07-14T09:15:00Z',
    tags: ['movies', 'films', 'cinema'],
  },
  {
    id: '16',
    name: 'Art and Design',
    image: 'https://example.com/images/artdesign.jpg',
    description: 'A space for artists and designers to share their work.',
    ChannelUsers: ['user22', 'user23', 'user24'],
    createdAt: '2023-08-19T13:00:00Z',
    tags: ['art', 'design', 'creativity'],
  },
  {
    id: '17',
    name: 'Tech Talk',
    image: 'https://example.com/images/techtalk.jpg',
    description: 'A channel dedicated to the latest in technology.',
    ChannelUsers: ['user1', 'user2', 'user3'],
    createdAt: '2023-01-01T12:00:00Z',
    tags: ['technology', 'gadgets', 'innovation'],
  },
  {
    id: '18',
    name: 'Fitness Freaks',
    image: 'https://example.com/images/fitnessfreaks.jpg',
    description: 'Your daily dose of fitness and health tips.',
    ChannelUsers: ['user4', 'user5'],
    createdAt: '2023-02-15T08:30:00Z',
    tags: ['fitness', 'health', 'workout'],
  },
  {
    id: '19',
    name: 'Cooking Corner',
    image: 'https://example.com/images/cookingcorner.jpg',
    description: 'Delicious recipes and cooking tips from around the world.',
    ChannelUsers: ['user6', 'user7', 'user8', 'user9'],
    createdAt: '2023-03-10T14:45:00Z',
    tags: ['cooking', 'recipes', 'food'],
  },
  {
    id: '20',
    name: 'Book Club',
    image: 'https://example.com/images/bookclub.jpg',
    description: 'Join us to discuss our latest book picks.',
    ChannelUsers: ['user10', 'user11'],
    createdAt: '2023-04-05T16:20:00Z',
    tags: ['books', 'reading', 'literature'],
  },
  {
    id: '21',
    name: 'Travel Diaries',
    image: 'https://example.com/images/traveldiaries.jpg',
    description: 'Share your travel experiences and tips.',
    ChannelUsers: ['user12', 'user13', 'user14'],
    createdAt: '2023-05-22T11:00:00Z',
    tags: ['travel', 'adventure', 'exploration'],
  },
  {
    id: '22',
    name: 'Music Mania',
    image: 'https://example.com/images/musicmania.jpg',
    description: 'Discuss the latest hits and all-time classics.',
    ChannelUsers: ['user15', 'user16', 'user17', 'user18', 'user19'],
    createdAt: '2023-06-01T10:30:00Z',
    tags: ['music', 'songs', 'albums'],
  },
  {
    id: '23',
    name: 'Movie Buffs',
    image: 'https://example.com/images/moviebuffs.jpg',
    description: 'All about movies - reviews, news, and discussions.',
    ChannelUsers: ['user20', 'user21'],
    createdAt: '2023-07-14T09:15:00Z',
    tags: ['movies', 'films', 'cinema'],
  },
  {
    id: '24',
    name: 'Art and Design',
    image: 'https://example.com/images/artdesign.jpg',
    description: 'A space for artists and designers to share their work.',
    ChannelUsers: ['user22', 'user23', 'user24'],
    createdAt: '2023-08-19T13:00:00Z',
    tags: ['art', 'design', 'creativity'],
  },
  {
    id: '25',
    name: 'Tech Talk',
    image: 'https://example.com/images/techtalk.jpg',
    description: 'A channel dedicated to the latest in technology.',
    ChannelUsers: ['user1', 'user2', 'user3'],
    createdAt: '2023-01-01T12:00:00Z',
    tags: ['technology', 'gadgets', 'innovation'],
  },
  {
    id: '26',
    name: 'Fitness Freaks',
    image: 'https://example.com/images/fitnessfreaks.jpg',
    description: 'Your daily dose of fitness and health tips.',
    ChannelUsers: ['user4', 'user5'],
    createdAt: '2023-02-15T08:30:00Z',
    tags: ['fitness', 'health', 'workout'],
  },
  {
    id: '27',
    name: 'Cooking Corner',
    image: 'https://example.com/images/cookingcorner.jpg',
    description: 'Delicious recipes and cooking tips from around the world.',
    ChannelUsers: ['user6', 'user7', 'user8', 'user9'],
    createdAt: '2023-03-10T14:45:00Z',
    tags: ['cooking', 'recipes', 'food'],
  },
  {
    id: '28',
    name: 'Book Club',
    image: 'https://example.com/images/bookclub.jpg',
    description: 'Join us to discuss our latest book picks.',
    ChannelUsers: ['user10', 'user11'],
    createdAt: '2023-04-05T16:20:00Z',
    tags: ['books', 'reading', 'literature'],
  },
  {
    id: '29',
    name: 'Travel Diaries',
    image: 'https://example.com/images/traveldiaries.jpg',
    description: 'Share your travel experiences and tips.',
    ChannelUsers: ['user12', 'user13', 'user14'],
    createdAt: '2023-05-22T11:00:00Z',
    tags: ['travel', 'adventure', 'exploration'],
  },
  {
    id: '30',
    name: 'Music Mania',
    image: 'https://example.com/images/musicmania.jpg',
    description: 'Discuss the latest hits and all-time classics.',
    ChannelUsers: ['user15', 'user16', 'user17', 'user18', 'user19'],
    createdAt: '2023-06-01T10:30:00Z',
    tags: ['music', 'songs', 'albums'],
  },
  {
    id: '31',
    name: 'Movie Buffs',
    image: 'https://example.com/images/moviebuffs.jpg',
    description: 'All about movies - reviews, news, and discussions.',
    ChannelUsers: ['user20', 'user21'],
    createdAt: '2023-07-14T09:15:00Z',
    tags: ['movies', 'films', 'cinema'],
  },
  {
    id: '32',
    name: 'Art and Design',
    image: 'https://example.com/images/artdesign.jpg',
    description: 'A space for artists and designers to share their work.',
    ChannelUsers: ['user22', 'user23', 'user24'],
    createdAt: '2023-08-19T13:00:00Z',
    tags: ['art', 'design', 'creativity'],
  },
];

export const MusicListMock: MusicInterface[] = [
  {
    id: 1,
    title: 'title1',
    artist: 'artist1',
    album: 'album1',
    duration: 100,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 2,
    title: 'title2',
    artist: 'artist2',
    album: 'album2',
    duration: 200,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 3,
    title: 'title3',
    artist: 'artist3',
    album: 'album3',
    duration: 300,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 4,
    title: 'title4',
    artist: 'artist4',
    album: 'album4',
    duration: 400,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 5,
    title: 'title5',
    artist: 'artist5',
    album: 'album5',
    duration: 500,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 6,
    title: 'title6',
    artist: 'artist6',
    album: 'album6',
    duration: 600,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 7,
    title: 'title7',
    artist: 'artist7',
    album: 'album7',
    duration: 700,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 8,
    title: 'title8',
    artist: 'artist8',
    album: 'album8',
    duration: 800,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 9,
    title: 'title9',
    artist: 'artist9',
    album: 'album9',
    duration: 900,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 10,
    title: 'title10',
    artist: 'artist10',
    album: 'album10',
    duration: 1000,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 11,
    title: 'title11',
    artist: 'artist11',
    album: 'album11',
    duration: 1100,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: 12,
    title: 'title12',
    artist: 'artist12',
    album: 'album12',
    duration: 1200,
    albumImageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
];

export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    channelId: 1,
    userId: 1,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:01',
    updatedAt: '2021-08-17T07:00:01',
  },
  {
    id: 2,
    channelId: 1,
    userId: 2,
    content: 'ㅋㅋ',
    createdAt: '2021-08-17T07:00:02',
    updatedAt: '2021-08-17T07:00:02',
  },
  {
    id: 3,
    channelId: 1,
    userId: 1,
    content: '뭐하세요',
    createdAt: '2021-08-17T07:00:03',
    updatedAt: '2021-08-17T07:00:03',
  },
  {
    id: 4,
    channelId: 1,
    userId: 2,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:04',
    updatedAt: '2021-08-17T07:00:04',
  },
  {
    id: 5,
    channelId: 1,
    userId: 2,
    content: '노래 듣고 있습니다~',
    createdAt: '2021-08-17T07:00:05',
    updatedAt: '2021-08-17T07:00:05',
  },
  {
    id: 6,
    channelId: 1,
    userId: 6,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:06',
    updatedAt: '2021-08-17T07:00:06',
  },
  {
    id: 7,
    channelId: 1,
    userId: 7,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:07',
    updatedAt: '2021-08-17T07:00:07',
  },
  {
    id: 8,
    channelId: 1,
    userId: 8,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:08',
    updatedAt: '2021-08-17T07:00:08',
  },
  {
    id: 9,
    channelId: 1,
    userId: 9,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:09',
    updatedAt: '2021-08-17T07:00:09',
  },
  {
    id: 10,
    channelId: 1,
    userId: 10,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:10',
    updatedAt: '2021-08-17T07:00:10',
  },
  {
    id: 11,
    channelId: 1,
    userId: 11,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:11',
    updatedAt: '2021-08-17T07:00:11',
  },
  {
    id: 12,
    channelId: 1,
    userId: 12,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:12',
    updatedAt: '2021-08-17T07:00:12',
  },
  {
    id: 13,
    channelId: 1,
    userId: 13,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:13',
    updatedAt: '2021-08-17T07:00:13',
  },
  {
    id: 14,
    channelId: 1,
    userId: 14,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:14',
    updatedAt: '2021-08-17T07:00:14',
  },
  {
    id: 15,
    channelId: 1,
    userId: 15,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:15',
    updatedAt: '2021-08-17T07:00:15',
  },
  {
    id: 16,
    channelId: 1,
    userId: 16,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:16',
    updatedAt: '2021-08-17T07:00:16',
  },
  {
    id: 17,
    channelId: 1,
    userId: 17,
    content: '안녕하세요',
    createdAt: '2021-08-17T07:00:17',
    updatedAt: '2021-08-17T07:00:17',
  },
];
