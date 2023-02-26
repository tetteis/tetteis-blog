import { GetStaticProps, NextPage } from "next";

import { PageLayout } from "@/components/layout";
import { PortfolioList } from "@/components/portfolio";
import { Portfolio } from "@/interfaces/Portfolio";
import { getPortfolios } from "@/lib/portfolios";

type Props = {
  portfolio: Portfolio[];
};

const PortfoliosPage: NextPage<Props> = ({ portfolio }) => {
  return (
    <PageLayout pageTitle="All Blogs">
      {" "}
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        All Portfolios
      </h2>
      <PortfolioList portfolios={portfolio} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const portfolio = getPortfolios();

  return {
    props: { portfolio },
  };
};

export default PortfoliosPage;
