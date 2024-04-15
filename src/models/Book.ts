export interface Book {
  id: number;
  name: string;
  imageUrl: string;
  playlistUrl?: string;
  author?: string;
  genre?: string;
  released?: boolean;
  releaseDate?: string;
}
