/**
 * Represents a node in a directory tree.
 */
export type DirTreeNode = {
  // The name of the node.
  name: string;
  // The array of child nodes if the node is a directory. This is a recursive structure.
  children?: DirTreeNode[];
};
