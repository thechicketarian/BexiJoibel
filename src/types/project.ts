export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string; // HTML string
  images: string[];
  links: { label: string; url: string }[];
  tags?: string[];
  embed?: string; // optional HTML embed
};
