import GradientLine from "components/visual/GradientLine";
import styles from "./EmailSignup.module.css";

export default function EmailSignup() {
  return (
    <form
      action="https://app.convertkit.com/forms/1425227/subscriptions"
      method="post"
      className={styles.container}
    >
      <GradientLine className={styles.line} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Get my monthly reading list</h2>
        <div>
          <p className={styles.description}>
            A short, once-a-month email of useful articles & guides: the best of
            what I write, and the best of what I find.
          </p>
          <p className={styles.description}>
            Sign up now and get a free copy of my mini-guide, "How to Accelerate
            Your Developer Career".
          </p>
        </div>
      </div>
      <div>
        <div>
          <input
            name="email_address"
            placeholder="Your email address"
            className={styles.input}
            type="text"
          />
        </div>
        <button className={styles.button} type="submit">Subscribe</button>
      </div>
    </form>
  );
}
