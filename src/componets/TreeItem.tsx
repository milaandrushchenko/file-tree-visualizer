import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa";
import type { FileSystemNode } from "../types";
import { useState } from "react";

export default function TreeItem({
  name,
  treeNode,
}: {
  name: string;
  treeNode: FileSystemNode;
}) {
  const [expanded, setExpanded] = useState(false);

  if (treeNode.type === "file") {
    return (
      <div className="file">
        <FaFile color="#4a90e2" style={{ marginRight: 6 }} />
        {name}
      </div>
    );
  }

  return (
    <div>
      <div className="folder" onClick={() => setExpanded((v) => !v)}>
        {expanded ? (
          <FaFolderOpen color="#f4b400" />
        ) : (
          <FaFolder color="#f4b400" />
        )}
        <span>{name}</span>
      </div>

      {expanded && (
        <div className="item-children">
          {Object.entries(treeNode.children).map(([key, value]) => (
            <TreeItem key={key} name={key} treeNode={value} />
          ))}
        </div>
      )}
    </div>
  );
}
