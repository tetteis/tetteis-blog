import { Portfolio } from "@/interfaces/Portfolio";
import { Blog } from "@/interfaces/Blog";

export interface MarkdownItem {
  title: string;
  description: string;
  content: string;
  slug: string;
  portfolioLink: string;
  date: string;
}
export interface MarkdownContent {
  blog: Blog[];
  portfolio: Portfolio[];
}

export type ContentItemName = keyof MarkdownContent;

export interface SearchContent extends Partial<MarkdownItem> {
  category: ContentItemName;
}
