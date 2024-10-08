/**
 * Represents a Markdown file structure with its content and data(front matter).
 */
export type Markdown = {
  content: string;
  data: {
    [key: string]: any;
  };
};

/**
 * Represents a node in a tag tree.
 */
export type TagTreeNode = {
  [key: string]: {
    basename: string;
  } & Markdown;
};
