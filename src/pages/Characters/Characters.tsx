import { useMemo } from "react";
import CardList from "../../components/CardList/CardList";
import Spinner from "../../components/Spinner/Spinner";
import { useAppSelector } from "../../hooks/redux";
import { withLayout } from "../../layout/Layout";
import styles from "./Characters.module.css";

const CharactersPage = () => {
  const { characters, isLoading } = useAppSelector((state) => state.characterReducer);

  const count = useMemo(() => characters.count, []);

  return (
    <div className={styles.container}>
      {isLoading ? <Spinner /> : <CardList characters={characters.results} />}
    </div>
  );
};

export default withLayout(CharactersPage);
