// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

import { getBlogs } from "@/lib/blogs";
import { Blog } from "@/interfaces/Blog";

import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { BlogList } from "@/components/blog";
import PortfolioList from "@/components/portfolio/portfolioList";
import { BaseLayout } from "@/components/layout";

// const navigation = [
//   { name: "Blogs", href: "/blogs" },
//   { name: "Portfolio", href: "/portfolios" },
// ];
type Props = {
  blogs: Blog[];
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link legacyBehavior href="/blogs">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <BlogList blogs={blogs} />

      <br></br>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link legacyBehavior href="/portfolios">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>

      <PortfolioList />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  // console.log(blogs);

  return {
    props: { blogs },
  };
};

export default Home;
