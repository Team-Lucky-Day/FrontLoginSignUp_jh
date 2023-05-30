import "./App.css";
import Main from "./Main/Main";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./Login_SignUp/AuthPage";
import FindPw from "./Login_SignUp/Login/FindPw";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Login" element={<AuthPage />} />
      <Route path="/FindPw" element={<FindPw />} />
      {/* <Route path="/Menu" element={<Menu />} />
      <Route path="/Seat" element={<Seat />} />
      <Route path="/FavoritesMenu" element={<FavoritesMenu />} /> */}
    </Routes>
  );
}

export default App;
