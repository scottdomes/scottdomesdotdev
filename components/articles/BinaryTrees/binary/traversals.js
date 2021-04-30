const PAUSE_DURATION = 700;

export const binaryPreorderTraverse = (node) => {
  const queue = [node];
  const output = [];

  while (queue.length) {
    const current = queue.pop();

    if (!current) {
      continue;
    }

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

export const binaryInOrderTraverse = async (node, setVisited) => {
  const queue = [];
  let current = node;

  while (current || queue.length) {
    if (current) {
      queue.push(current);
      current = current.left;
    } else {
      current = queue.pop();
      await new Promise((resolve) => setTimeout(resolve, PAUSE_DURATION));
      setVisited(current.val, true);

      current = current.right;
    }
  }
};

export const binaryPostorderTraverse = async (node, setVisited) => {
  const queue = [node];

  while (queue.length) {
    const current = queue.shift();

    await new Promise((resolve) => setTimeout(resolve, PAUSE_DURATION));
    setVisited(current.val, true);

    if (current.left) {
      queue.push(current);
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
};
