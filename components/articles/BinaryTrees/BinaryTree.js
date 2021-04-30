import { useEffect, useState } from "react";
import styles from "./BinaryTree.module.css";

const tree = [1, null, 3, 2, 4, null, 5, 6];

const treeAsObject = {
  children: [],
};

const parents = [treeAsObject];
let currentParentIndex = 0;
tree.forEach((node) => {
  if (node) {
    const object = {
      val: node,
      children: [],
    };
    parents.push(object);
    const currentParent = parents[currentParentIndex];
    currentParent.children.push(object);
  } else {
    currentParentIndex++;
  }
});

const NodeDisplay = ({ node, nodesByVal }) => {
  return (
    <li>
      <div>
        <span>
          {node.val} {nodesByVal[node.val] && "V"}
        </span>
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

const BinaryTree = () => {
  const valueMapping = {};
  tree.forEach((node) => {
    if (node) {
      valueMapping[node] = false;
    }
  });
  const [nodesByVal, setNodesByVal] = useState(valueMapping);

  const setVisited = (val, isVisited) => {
    const copy = { ...nodesByVal, [val]: isVisited };
    setNodesByVal(copy);
  };

  const preorderTraverse = async (node) => {
    if (!node) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setVisited(node.val, true);

    node.children.forEach((child) => {
      preorderTraverse(child);
    });
  };

  useEffect(() => {
    // preorderTraverse(treeAsObject.children[0]);
  })

  return (
    <div className={styles.tree}>
      <ul>
        <NodeDisplay node={treeAsObject.children[0]} nodesByVal={nodesByVal} />
      </ul>
    </div>
  );
};

export default BinaryTree;
