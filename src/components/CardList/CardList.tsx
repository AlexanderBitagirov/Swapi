import { ICardListProps } from "./CardList.props";
import styles from "./CardList.module.css"
import Card from "../Card/Card";
import Property from "../Propperty/Property";
import { Tag } from "../Tag/Tag";

const CardList = ({characters, ...props}: ICardListProps): JSX.Element => {
  return (
    <div className={styles.list} {...props}>
      {characters.map((el, idx) => (
        <Card className={styles.item} key={idx}>
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
              <Tag birthYear={el.birth_year}>{el.birth_year}</Tag>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardList;
