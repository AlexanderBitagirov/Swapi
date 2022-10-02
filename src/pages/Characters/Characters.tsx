import Card from "../../components/Card/Card";
import Property from "../../components/Propperty/Property";
import { Tag } from "../../components/Tag/Tag";
import { useAppSelector } from "../../hooks/redux";
import { withLayout } from "../../layout/Layout";
import styles from "./Characters.module.css";

const CharactersPage = () => {
  const { characters } = useAppSelector((state) => state.characterReducer);

  return (
    <div>
      <div className={styles.list}>
        {characters.results.map((el, idx) => (
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
                {el.gender !== "n/a" && (
                  <Tag gender={el.gender}>{el.gender}</Tag>
                )}
                <Tag birthYear={el.birth_year}>{el.birth_year}</Tag>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default withLayout(CharactersPage);
