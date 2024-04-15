import { Playlist } from './Playlist';

export interface Book {
  id: number;
  name: string;
  imageUrl: string;
  playlists?: Playlist[];
  author?: string;
  genre?: string;
  released?: boolean;
  releaseDate?: string;
}
