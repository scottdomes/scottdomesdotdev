import styles from "./BinaryTree.module.css";

const getChildNodes = (node) => {
  if (node.left || node.right) {
    return [node.left, node.right].filter(Boolean);
  } else if (node.children) {
    return node.children;
  }

  return [];
};

const NodeDisplay = ({ node, nodesByVal }) => {
  const isVisited = nodesByVal[node.val];
  const childNodes = getChildNodes(node);
  return (
    <li>
      <div className={isVisited ? styles.visited : ""}>
        <span>{node.val}</span>
      </div>
      {childNodes.length > 0 && (
        <ul>
          {childNodes.map((child) => {
            return (
              <NodeDisplay
                node={child}
                key={child.val}
                nodesByVal={nodesByVal}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NodeDisplay;
