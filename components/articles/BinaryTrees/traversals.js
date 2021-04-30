const PAUSE_DURATION = 700;

export const preorderTraverse = async (node, setVisited) => {
  const queue = [node];

  while (queue.length) {
    const current = queue.pop();

    if (!current) {
      continue;
    }

    await new Promise((resolve) => setTimeout(resolve, PAUSE_DURATION));
    setVisited(current.val, true);

    current.children
      .slice()
      .reverse()
      .forEach((child) => {
        queue.push(child);
      });
  }
};

export const inorderTraverse = async (node, setVisited) => {
  const queue = [node];
  let current = node;

  while (current || queue.length) {
    while (current) {
      queue.push(current);
      const leftChildren = current.children.slice(
        0,
        current.children.length - 1
      );
      leftChildren.forEach((child) => {
        queue.push(child);
      });
      current = current.children[0];
    }

    current = queue.pop();

    await new Promise((resolve) => setTimeout(resolve, PAUSE_DURATION));

    setVisited(current.val, true);

    current = current.children.slice(-1)[0];
  }
};
