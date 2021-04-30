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

const BinaryTree = () => {
  const valueMapping = {};
  tree.forEach((node) => {
    if (node) {
      valueMapping[node] = false;
    }
  });
  const [nodesByVal, setNodesByVal] = useState(valueMapping);

  const setVisited = (val, isVisited) => {
    console.log(val, isVisited, nodesByVal);
    setNodesByVal((state) => {
      return { ...state, [val]: isVisited };
    });
  };

  const preorderTraverse = async (node) => {
    const queue = [node];

    while (queue.length) {
      const current = queue.pop();

      if (!current) {
        continue;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setVisited(current.val, true);

      current.children
        .slice()
        .reverse()
        .forEach((child) => {
          queue.push(child);
        });
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setNodesByVal(valueMapping);
    preorderTraverse(node);
  };

  useEffect(() => {
    preorderTraverse(treeAsObject.children[0]);
  }, []);

  return (
    <div className={styles.tree}>
      <ul>
        <NodeDisplay node={treeAsObject.children[0]} nodesByVal={nodesByVal} />
      </ul>
    </div>
  );
};

export default BinaryTree;
