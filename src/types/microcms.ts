export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  slug: string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  html: string;
  eyecatch?: Eyecatch;
  category?: Category;
  slug: string;
  "blog-style"?: string[];
};

export type Interviewer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
  icon: {
    url: string;
    height: number;
    width: number;
  };
  text: string;
};

export type Logo = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  company: string;
  logo: {
    url: string;
    height: number;
    width: number;
  };
};

export type Slider = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}; 