const PAUSE_DURATION = 700;

export const preorderTraverse = (node) => {
  const queue = [node];
  const output = [];

  while (queue.length) {
    const current = queue.pop();

    output.push(current.val);

    current.children
      .slice()
      .reverse()
      .forEach((child) => {
        queue.push(child);
      });
  }

  return output;
};

export const inorderTraverse = (node) => {
  const queue = [];
  const output = [];

  let current = node;

  while (current || queue.length) {
    if (current) {
      queue.push(current);
      const leftChildren = current.children
        .slice(1, current.children.length - 1)
        .reverse();
      leftChildren.forEach((child) => {
        queue.push(child);
      });
      current = current.children[0];
    } else {
      current = queue.pop();
      output.push(current.val);
      current = current.children.slice(-1)[0];
    }
  }

  return output;
};

export const postorderTraverse = (node) => {
  const queue = [node];
  const output = [];

  while (queue.length) {
    const current = queue.pop();
    output.unshift(current.val);

    current.children.forEach((child) => {
      queue.push(child);
    });
  }

  return output;
};
