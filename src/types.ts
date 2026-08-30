export type Project = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  year: string;
  thumbnail?: string;
  hasWikiPage?: boolean;
  repositoryUrl?: string;
};
