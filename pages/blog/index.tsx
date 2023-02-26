import { GetStaticProps, NextPage } from "next";

import { BlogList } from "@/components/blog";
import { PageLayout } from "@/components/layout";
import { Blog } from "@/interfaces/Blog";
import { getBlogs } from "@/lib/blogs";

type Props = {
  blog: Blog[];
};

const BlogsPage: NextPage<Props> = ({ blog }) => {
  return (
    <PageLayout pageTitle="All Blogs">
      {" "}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        All Blogs
      </h2>
      <BlogList blogs={blog} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blog = getBlogs();

  return {
    props: { blog },
  };
};

export default BlogsPage;
