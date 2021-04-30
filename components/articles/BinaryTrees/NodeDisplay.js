import styles from "./BinaryTree.module.css";

const NodeDisplay = ({ node, nodesByVal }) => {
  const isVisited = nodesByVal[node.val];
  return (
    <li>
      <div className={isVisited ? styles.visited : ""}>
        <span>{node.val}</span>
      </div>
      {node.children.length > 0 && (
        <ul>
          {node.children.map((child, key) => {
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
