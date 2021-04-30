import { useEffect, useState } from "react";
import styles from "./BinaryTree.module.css";
import NodeDisplay from "./NodeDisplay";
import { preorderTraverse } from "./traversals";
import { convertTreeArrayToObject } from "./util";

const TRAVERSALS = {
  preorder: preorderTraverse,
};

const BinaryTree = ({ tree, traversalMethod }) => {
  const valueMapping = {};
  const treeAsObject = convertTreeArrayToObject(tree);
  tree.forEach((node) => {
    if (node) {
      valueMapping[node] = false;
    }
  });
  const [nodesByVal, setNodesByVal] = useState(valueMapping);
  const [isPlaying, setPlaying] = useState(false);

  const setVisited = (val, isVisited) => {
    setNodesByVal((state) => {
      return { ...state, [val]: isVisited };
    });
  };

  const traverse = async () => {
    setPlaying(true);
    await TRAVERSALS[traversalMethod](treeAsObject.children[0], setVisited);
    setPlaying(false);
  };

  const replay = () => {
    setNodesByVal(valueMapping);
    traverse();
  };

  return (
    <div className={styles.tree}>
      <ul>
        <NodeDisplay node={treeAsObject.children[0]} nodesByVal={nodesByVal} />
      </ul>
      <button disabled={isPlaying} className={styles.button} onClick={replay}>
        Play
      </button>
    </div>
  );
};

export default BinaryTree;
