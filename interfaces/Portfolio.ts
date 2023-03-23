import { MarkdownItem } from "./Markdown";

export interface Portfolio extends MarkdownItem {
  coverImage: string;
  highlights: string[];
}
