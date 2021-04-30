export const preorderTraverse = async (node, setVisited) => {
  if (!node) {
    return;
  }

  setVisited(node.val, true);

  if (node.left) {
    preorderTraverse(node.left, setVisited);
  }

  if (node.right) {
    preorderTraverse(node.right, setVisited);
  }
};
