import { ChangeEvent, useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList/CardList";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import useDebounce from "../../hooks/useDebounce";
import { withLayout } from "../../layout/Layout";
import { fetchCharacters } from "../../store/reducers/ActionCreators";
import styles from "./Characters.module.css";

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const { characters, isLoading } = useAppSelector(
    (state) => state.characterReducer
  );

  const count = useMemo(() => characters.count, [characters.count]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    dispatch(
      fetchCharacters(`https://swapi.dev/api/people/?search=${debouncedValue}`)
    );
  }, [debouncedValue]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.title}>
            {count} Peoples for you to choose your favorite
          </div>
          <input
            className={styles.search}
            placeholder="find..."
            onChange={handleChange}
            value={value}
          />
          <CardList
            characters={characters.results}
            className={styles.results}
          />
          {parseInt(characters.count) > 9 && (
            <Pagination className={styles.leaf} previous={characters.previous} next={characters.next} />
          )}
        </div>
      )}
    </div>
  );
};

export default withLayout(CharactersPage);
