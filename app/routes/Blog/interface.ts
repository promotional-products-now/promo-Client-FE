interface BlogCardProps {
  imageSrc: string;
  title: string;
  category: { _id: string; title: string };
  description: string;
  _id: string;
  body: string;
}

export type { BlogCardProps };
