export type FileNode = { type: "file" };

export type FolderNode = {
  type: "folder";
  children: Record<string, FileSystemNode>;
};

export type FileSystemNode = FileNode | FolderNode;

export type FileSystemType = Record<string, FileSystemNode>;

export type FileSystemResponse = {
  root: FileSystemType;
};
