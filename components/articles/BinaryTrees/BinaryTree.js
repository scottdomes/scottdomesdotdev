import styles from "./BinaryTree.module.css";

const tree = [1, null, 3, 2, 4, null, 5, 6];

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

console.log(treeAsObject);

const NodeDisplay = ({ node }) => {
  return (
    <li>
      <div>
        <span>{node.val}</span>
      </div>
      {node.children.length && (
        <ul>
          {node.children.map((child, key) => {
            return <NodeDisplay node={child} key={child.val} />;
          })}
        </ul>
      )}
    </li>
  );
};

const BinaryTree = () => {
  return (
    <div className={styles.tree}>
      <ul>
        <NodeDisplay node={treeAsObject.children[0]} />
        <li>
          <div>
            <span>2</span>
          </div>
          <ul>
            <li>
              <div>
                <span>1</span>
              </div>
            </li>
            <li>
              <div>
                <span>4</span>
              </div>
              <ul>
                <li>
                  <div>
                    <span>3</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>5</span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BinaryTree;
