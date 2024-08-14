interface BlogCardProps {
  imageSrc: string;
  title: string;
  slug: string;
  category: { _id: string; title: string };
  description: string;
  _id: string;
  body: string;
}

export type { BlogCardProps };
