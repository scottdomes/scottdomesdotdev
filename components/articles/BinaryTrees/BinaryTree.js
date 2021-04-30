import { useEffect, useState } from "react";
import { convertBinaryTreeArrayToObject } from "./binary/util";
import styles from "./BinaryTree.module.css";
import NodeDisplay from "./NodeDisplay";
import {
  inorderTraverse,
  postorderTraverse,
  preorderTraverse,
} from "./traversals";
import { convertNaryTreeArrayToObject } from "./nary/util";

const TRAVERSALS = {
  preorder: preorderTraverse,
  inorder: inorderTraverse,
  postorder: postorderTraverse,
};

const CONVERSIONS = {
  binary: convertBinaryTreeArrayToObject,
  nary: convertNaryTreeArrayToObject,
};

const BinaryTree = ({ tree, traversalMethod, treeType = "binary" }) => {
  const valueMapping = {};
  const treeAsObject = CONVERSIONS[treeType](tree);
  const initialNode =
    treeType === "binary" ? treeAsObject.left : treeAsObject.children[0];
  console.log(treeAsObject);
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
    await TRAVERSALS[traversalMethod](initialNode, setVisited);
    setPlaying(false);
  };

  const replay = () => {
    setNodesByVal(valueMapping);
    traverse();
  };

  return (
    <div className={styles.tree}>
      <ul className={styles.container}>
        <NodeDisplay node={initialNode} nodesByVal={nodesByVal} />
      </ul>
      <button disabled={isPlaying} className={styles.button} onClick={replay}>
        Play
      </button>
    </div>
  );
};

export default BinaryTree;
