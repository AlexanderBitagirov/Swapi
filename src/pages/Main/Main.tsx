import Button from "../../components/Button/Button";
import { withLayout } from "../../layout/Layout";
import styles from "./Main.module.css";
import Banner from "./banner.png";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Find all your favorite character</h1>
        <h2 className={styles.info}>
          You can find out all the information about your favorite characters
        </h2>
        <Button to="/characters" appearance="orange">
          See more...
        </Button>
      </div>
      <img className={styles.banner} src={Banner} alt="banner" />
    </div>
  );
};

export default withLayout(MainPage);
