import { useEffect, useState } from "react";
import { convertBinaryTreeArrayToObject } from "./binary/util";
import styles from "./BinaryTree.module.css";
import NodeDisplay from "./NodeDisplay";
import {
  inorderTraverse,
  postorderTraverse,
  preorderTraverse,
} from "./nary/traversals";
import { convertNaryTreeArrayToObject } from "./nary/util";
import {
  binaryInOrderTraverse,
  binaryPostorderTraverse,
  binaryPreorderTraverse,
} from "./binary/traversals";

const TRAVERSALS = {
  binary: {
    preorder: binaryPreorderTraverse,
    inorder: binaryInOrderTraverse,
    postorder: binaryPostorderTraverse,
  },
  nary: {
    preorder: preorderTraverse,
    inorder: inorderTraverse,
    postorder: postorderTraverse,
  },
};

const PAUSE_DURATION = 700;

const CONVERSIONS = {
  binary: convertBinaryTreeArrayToObject,
  nary: convertNaryTreeArrayToObject,
};

const BinaryTree = ({
  tree,
  traversalMethod,
  treeType = "binary",
  hidePlayButton,
}) => {
  const valueMapping = {};
  const treeAsObject = CONVERSIONS[treeType](tree);
  const initialNode =
    treeType === "binary" ? treeAsObject.left : treeAsObject.children[0];

  tree.forEach((node) => {
    if (node) {
      valueMapping[node] = false;
    }
  });
  const [nodesByVal, setNodesByVal] = useState(valueMapping);
  const [isPlaying, setPlaying] = useState(false);

  const visitOrder = TRAVERSALS[treeType][traversalMethod](initialNode);

  const setVisited = (val, isVisited) => {
    setNodesByVal((state) => {
      return { ...state, [val]: isVisited };
    });
  };

  const traverse = async () => {
    setPlaying(true);
    for (const node of visitOrder) {
      await new Promise((resolve) => setTimeout(resolve, PAUSE_DURATION));
      setVisited(node, true);
    }
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
      {!hidePlayButton && (
        <button disabled={isPlaying} className={styles.button} onClick={replay}>
          Play
        </button>
      )}
    </div>
  );
};

export default BinaryTree;
