import { useCallback, useMemo, useState } from "react";
import CardList from "../../components/CardList/CardList";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import { useAppSelector } from "../../hooks/redux";
import { withLayout } from "../../layout/Layout";
import styles from "./Characters.module.css";

const CharactersPage = () => {
  const { characters, isLoading } = useAppSelector(
    (state) => state.characterReducer
  );

  const count = useMemo(() => characters.count, [characters.count]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className={styles.title}>
            {count} Peoples for you to choose your favorite
          </div>
          <CardList characters={characters.results} />
        </div>
      )}
    </div>
  );
};

export default withLayout(CharactersPage);
