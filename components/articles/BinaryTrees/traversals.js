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
