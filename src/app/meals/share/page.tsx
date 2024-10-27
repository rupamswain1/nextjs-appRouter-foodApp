import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import ImagePicker from "./ImagePicker";

const SharePage = () => {
  return (
    <div className={styles.shareBody}>
      <header className={styles.headerContainer}>
        <h1 className="heading">
          Share your
          <span className="highlightedText"> favourite meal</span>
        </h1>
        <p className="subHeaderText">
          or any other meal you feel needs sharing
        </p>
      </header>
      <main className={styles.shareForm + " subHeaderText"}>
        <form>
          <div className={styles.nameContainer}>
            <p className={styles.labelAndInput}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p className={styles.labelAndInput}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p className={styles.labelAndInput}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p className={styles.labelAndInput}>
            <label htmlFor="shortSummary">Short Summmary</label>
            <input type="text" id="shortSummary" name="summary" />
          </p>
          <p className={styles.labelAndInput}>
            <label htmlFor="instructions">Instructions</label>
            <textarea id="instructions" />
          </p>
          <ImagePicker name="image" label="Meal Image" />
          <div className={styles.button}>
            <Button as="button" type="primary" text="Share Meal" />
          </div>
        </form>
      </main>
    </div>
  );
};
export default SharePage;
