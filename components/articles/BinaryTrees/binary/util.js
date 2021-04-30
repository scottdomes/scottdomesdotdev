export const convertBinaryTreeArrayToObject = (tree) => {
  const treeAsObject = {
    children: [],
  };

  const parents = [treeAsObject];
  let currentParentIndex = 0;
  tree.forEach((node) => {
    if (node) {
      const object = {
        val: node,
        left: null,
        right: null,
      };
      parents.push(object);
      const currentParent = parents[currentParentIndex];
      if (currentParent.left) {
        currentParent.right = object;
      } else {
        currentParent.left = object;
      }
    } else {
      currentParentIndex++;
    }
  });

  return treeAsObject;
};
