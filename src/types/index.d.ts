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
 * Represents a node in a directory tree.
 */
export type DirTreeNode = {
  name: string; // The name of the node.
  children?: DirTreeNode[]; // The array of child nodes if the node is a directory. This is a recursive structure.
};

/**
 * Represents a node in a tag tree.
 */
export type TagTreeNode = {
  [key: string]: {
    basename: string;
  } & Markdown;
};
