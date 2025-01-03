export interface ArtImage {
  id: string;
  url: string;
  title: string;
  description: string;
}

export interface ArtGallery {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: ArtImage[];
}