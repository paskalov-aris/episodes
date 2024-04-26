import { Playlist } from '../../models/Playlist';

export interface UseCreateContinueWatchingSectionArgs {
  playlists: Playlist[];
  bookName: string;
  bookAuthor: string;
  bookImageUrl: string;
}
