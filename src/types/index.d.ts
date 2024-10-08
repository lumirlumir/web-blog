/**
 * Represents a Markdown file structure with its basename, content and data(front matter).
 */
export type MarkdownDocument = {
  basename: string;
  // The property obtained from the front matter
  content: string;
  // The property obtained from the front matter
  data: {
    [key: string]: any;
  };
};
