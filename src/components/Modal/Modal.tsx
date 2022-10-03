import Portal from "../../Portal/Portal";
import Card from "../Card/Card";
import Property from "../Propperty/Property";
import styles from "./Modal.module.css";
import { IModalProps } from "./Modal.props";
import MaleIcon from "./male.png";
import FemaleIcon from "./female.png";
import HermaphroditeIcon from "./hermaphrodite.png";
import { Tag } from "../Tag/Tag";

const Modal = ({ character, closeDialog, ...props }: IModalProps) => {
  console.log(character);
  return (
    <Portal>
      <div className={styles.modal} onClick={() => closeDialog()} {...props}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              {character.gender === "male" && <img src={MaleIcon} alt="male" />}
              {character.gender === "female" && (
                <img src={FemaleIcon} alt="female" />
              )}
              {character.gender === "hermaphrodite" && (
                <img src={HermaphroditeIcon} alt="hermaphrodite" />
              )}
              {character.gender === "n/a" && (
                <img src={HermaphroditeIcon} alt="hermaphrodite" />
              )}
            </div>
            <div className={styles.tags}>
              {character.gender !== "n/a" && (
                <Tag gender={character.gender}>{character.gender}</Tag>
              )}
              {character.birth_year !== "unknown" && (
                <Tag birthYear={character.birth_year}>
                  {character.birth_year}
                </Tag>
              )}
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{character.name}</div>
            <Card
              clickable={false}
              size="m"
              color="white"
              className={styles.container}
            >
              <div className={styles.appearance}>
                {character.hair_color !== "n/a" && (
                  <div>hair color: {character.hair_color}</div>
                )}
                {character.eye_color !== "n/a" && (
                  <div>eye color: {character.eye_color}</div>
                )}
                {character.skin_color !== "n/a" && (
                  <div>skin color: {character.skin_color}</div>
                )}
              </div>
            </Card>
            <div className={styles.properties}>
              {character.height !== "unknown" && (
                <Card
                  clickable={false}
                  color="white"
                  size="s"
                  className={styles.card}
                >
                  <Property value={character.height} text="Height" />
                </Card>
              )}
              {character.mass !== "unknown" && (
                <Card
                  clickable={false}
                  color="white"
                  size="s"
                  className={styles.card}
                >
                  <Property value={character.mass} text="Mass" />
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
