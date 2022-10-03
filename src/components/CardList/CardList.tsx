import { ICardListProps } from "./CardList.props";
import styles from "./CardList.module.css";
import Card from "../Card/Card";
import Property from "../Propperty/Property";
import { Tag } from "../Tag/Tag";
import { useState, useCallback } from "react";
import Modal from "../Modal/Modal";
import { ICharacter } from "../../interfaces/character.interface";

const CardList = ({ characters, ...props }: ICardListProps): JSX.Element => {
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);
  const [current, setCurrent] = useState<ICharacter>();

  const showDialog = useCallback(() => {
    setDisplayDialog(true);
  }, [displayDialog]);

  const closeDialog = () => {
    setDisplayDialog(false);
  };

  const handleClick = (el: ICharacter) => {
    setCurrent(el);
    showDialog();
  };

  return (
    <div className={styles.list} {...props}>
      {characters.map((el, idx) => (
        <Card
          clickable={true}
          size="l"
          color="gray"
          className={styles.item}
          key={idx}
          onClick={() => handleClick(el)}
        >
          <div className={styles.content}>
            <div className={styles.name}>{el.name}</div>
            <div className={styles.properties}>
              {el.height !== "unknown" && (
                <Property value={el.height} text="Height" />
              )}
              {el.mass !== "unknown" && (
                <Property value={el.mass} text="Mass" />
              )}
            </div>
            <div className={styles.tags}>
              {el.gender !== "n/a" && <Tag gender={el.gender}>{el.gender}</Tag>}
              {el.birth_year !== "unknown" && (
                <Tag birthYear={el.birth_year}>{el.birth_year}</Tag>
              )}
            </div>
          </div>
        </Card>
      ))}
      {displayDialog && current && (
        <Modal character={current} closeDialog={closeDialog} />
      )}
    </div>
  );
};

export default CardList;
