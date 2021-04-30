export const convertTreeArrayToObject = (tree) => {
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

  return treeAsObject;
};
