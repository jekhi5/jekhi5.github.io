export interface Project {
  name: string;
  authors: string[];
  description: string;
  image: string; // name of image in data folder
  imageAltText: string;
  url?: string;
  githubUrl?: string;
  tags: string[];
}
