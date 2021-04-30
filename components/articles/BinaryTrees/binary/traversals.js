export const binaryPreorderTraverse = (node) => {
  const queue = [node];
  const output = [];

  while (queue.length) {
    const current = queue.pop();

    output.push(current.val);

    if (current.right) {
      queue.push(current.right);
    }

    if (current.left) {
      queue.push(current.left);
    }
  }

  return output;
};

export const binaryInOrderTraverse = (node) => {
  const queue = [node];
  const output = [];
  let currentNode = node.left;

  while (currentNode || queue.length) {
    if (currentNode) {
      queue.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = queue.pop();
      output.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }

  return output;
};

export const binaryPostorderTraverse = (node) => {
  const queue = [node];
  const output = [];

  while (queue.length) {
    const current = queue.pop();

    output.unshift(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  return output;
};
