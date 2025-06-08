import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import type { Blog, Category, Interviewer, Logo, Slider } from "@/types/microcms";

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getBlogs = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Blog>({
      endpoint: "blogs",
      queries,
    });
    return data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    // エラーが発生した場合、空の contents を持つオブジェクトを返す
    return { contents: [], totalCount: 0, limit: 0, offset: 0 };
  }
};

export const getBlog = async (
  slug: string,
  queries?: MicroCMSQueries,
) => {
  const data = await client.getList<Blog>({
    endpoint: "blogs",
    queries: { ...queries, filters: `slug[equals]${slug}` },
  });
  return data.contents[0];
};

export const getCategory = async (
  slug: string,
  queries?: MicroCMSQueries,
) => {
  const data = await client.getList<Category>({
    endpoint: "categories",
    queries: { ...queries, filters: `slug[equals]${slug}` },
  });
  return data.contents[0];
};

export const getCategories = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Category>({
      endpoint: "categories",
      queries,
    });
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    // エラーが発生した場合、空の contents を持つオブジェクトを返す
    return { contents: [], totalCount: 0, limit: 0, offset: 0 };
  }
};

export const getInterviewers = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Interviewer>({
      endpoint: "member",
      queries,
    });
    return data;
  } catch (error) {
    console.error("Error fetching interviewers:", error);
    return { contents: [], totalCount: 0, limit: 0, offset: 0 };
  }
};

export const getLogos = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Logo>({
      endpoint: "logo",
      queries,
    });
    return data;
  } catch (error) {
    console.error("Error fetching logos:", error);
    return { contents: [], totalCount: 0, limit: 0, offset: 0 };
  }
};

export const getSliders = async (queries?: MicroCMSQueries) => {
  try {
    const data = await client.getList<Slider>({
      endpoint: "slider",
      queries,
      customRequestInit: {
        next: { revalidate: 0 },
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching sliders:", error);
    return { contents: [], totalCount: 0, limit: 0, offset: 0 };
  }
};

export default client; 