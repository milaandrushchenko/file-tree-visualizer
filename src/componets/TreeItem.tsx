import { FaFile, FaFolder } from "react-icons/fa";
import type { FileSystemNode } from "../types";

export default function TreeItem({
  name,
  treeNode,
}: {
  name: string;
  treeNode: FileSystemNode;
}) {
  if (treeNode.type === "file") {
    return (
      <div style={{ paddingBottom: 8 }}>
        <FaFile color="#4a90e2" /> {name}
      </div>
    );
  }

  return (
    <div>
      <div style={{ paddingBottom: 8 }}>
        <FaFolder color="#f4b400" /> {name}
      </div>

      <div style={{ paddingLeft: 16 }}>
        {Object.entries(treeNode.children).map(([key, value]) => (
          <TreeItem key={key} name={key} treeNode={value} />
        ))}
      </div>
    </div>
  );
}
