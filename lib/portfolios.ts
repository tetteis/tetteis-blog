import { Portfolio } from "./../interfaces/Portfolio";
import {
  getAllItems,
  getDir,
  getFileNames,
  getItemInPath,
  markdownToHtml,
} from "@/lib/md";
import { join } from "path";

const PORTFOLIO_DIR = getDir("/content/portfolios");

const getPortfolioFileNames = () => {
  return getFileNames(PORTFOLIO_DIR);
};

const getPortfoliosSlugs = () => {
  return getPortfolioFileNames().map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
};

const getPortfolio = (fileName: string): Portfolio => {
  const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio;
  portfolio.slug = fileName.replace(/\.md$/, "");
  return portfolio;
};

const getPortfolios = (): Portfolio[] => {
  const names = getPortfolioFileNames();
  return getAllItems(names, getPortfolio) as Portfolio[];
};

const getPortfolioBySlug = (slug: string) => {
  const fileName = slug + ".md";
  return getPortfolio(fileName);
};

const getPortfolioBySlugWithMarkdown = async (
  slug: string
): Promise<Portfolio> => {
  const portfolio = getPortfolioBySlug(slug);
  portfolio.content = await markdownToHtml(portfolio.content);
  return portfolio;
};

export { getPortfolios, getPortfolioBySlugWithMarkdown, getPortfoliosSlugs };
