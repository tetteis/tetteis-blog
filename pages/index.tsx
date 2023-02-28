import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { getBlogs } from "@/lib/blogs";
import { Blog } from "@/interfaces/Blog";
import { BlogList } from "@/components/blog";
import PortfolioList from "@/components/portfolio/portfolioList";
import { BaseLayout } from "@/components/layout";
import { saveSearchData } from "@/lib/md";
import { getPortfolios } from "@/lib/portfolios";
import { Portfolio } from "@/interfaces/Portfolio";

type Props = {
  blog: Blog[];
  portfolio: Portfolio[];
};

const Home: NextPage<Props> = ({ blog, portfolio }) => {
  return (
    <BaseLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Latest Articles
        <Link legacyBehavior href="/blog">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>
      <BlogList blogs={blog} />

      <br></br>

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolio List
        <Link legacyBehavior href="/portfolio">
          <a className="text-sm ml-1 text-indigo-600">(See All)</a>
        </Link>
      </h2>

      <PortfolioList portfolios={portfolio} />
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const blog = getBlogs();
  const portfolio = getPortfolios();

  const content = {
    blog,
    portfolio,
  };

  saveSearchData(content);

  return {
    props: {
      // slice is applied to shorten the blog and portfolio
      // list to just 4 entries on the homepage
      blog: blog.slice(0, 4),
      portfolio: portfolio.slice(0, 4),
    },
  };
};

export default Home;
