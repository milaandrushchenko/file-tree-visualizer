import { useEffect, useState } from "react";
import type { FileSystemResponse, FileSystemType } from "../types";
import TreeItem from "./TreeItem";

export default function TreeList() {
  const [tree, setTree] = useState<FileSystemType | null>(null);

  useEffect(() => {
    const getTree = async () => {
      const res = await fetch("/fs.json");
      const data: FileSystemResponse = await res.json();
      setTree(data.root);
    };
    getTree();
  }, []);

  const renderTree = (treeNode: FileSystemType) => {
    return Object.entries(treeNode).map(([key, value]) => {
      return <TreeItem key={key} name={key} treeNode={value} />;
    });
  };

  return <div>{tree && renderTree(tree)}</div>;
}
