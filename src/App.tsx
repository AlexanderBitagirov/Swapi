import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/Navbar/NavBar";
import CharactersPage from "./pages/Characters/Characters";
import MainPage from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFound/NotFound";

const App = () => {
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


