import styles from "./Article.module.css";
import Image from "next/image";

const Article = ({ post }) => {
  const { meta } = post.module;
  return (
    <a className={styles.container} href={`/articles${post.link}`}>
      <div className={styles.inner}>
        {meta.cover && false && (
          <div className={styles.imageContainer}>
            <Image
              src={`/covers/${meta.cover}`}
              alt="Article image"
              layout="fill"
            />
          </div>
        )}
        <div className={styles.text}>
          <a href={`/articles${post.link}`}>
            <h2 className={styles.title}>{meta.title}</h2>
          </a>
          <h3 className={styles.description}>{meta.description}</h3>
        </div>
      </div>
    </a>
  );
};

export default Article;