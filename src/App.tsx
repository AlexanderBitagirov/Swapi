import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/Navbar/NavBar";
import { useAppDispatch } from "./hooks/redux";
import CharactersPage from "./pages/Characters/Characters";
import MainPage from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFound/NotFound";
import { fetchCharacters } from "./store/reducers/ActionCreators";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCharacters("https://swapi.dev/api/people/?page=1"));
  }, []);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
