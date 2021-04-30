import styles from "./BinaryTree.module.css";

const BinaryTree = () => {
  return (
    <div className={styles.tree}>
      <ul>
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
