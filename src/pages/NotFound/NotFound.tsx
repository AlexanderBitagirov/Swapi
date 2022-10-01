import Button from "../../components/Button/Button";
import styles from "./NotFound.module.css";
import Planet from "./planet.png";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error}>404</div>
      <img className={styles.planet} src={Planet} alt="planet" />
      <Button appearance="green" to="/">
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
