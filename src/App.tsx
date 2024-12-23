/**
 * Author: Mario D'Errico
 * Date: 22/12/2024
 * Domain: humans.tech showcase
 */
import { Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import { DefaultPath, Paths } from "./hook/useNavigation";

import PageTwo from "./pages/pageTwo";
import PageTree from "./pages/pageTree";
import PageOne from "./pages/pageOne";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={DefaultPath} />} />
      <Route path={Paths.PAGEONE} element={<PageOne />} />
      <Route path={Paths.PAGETWO} element={<PageTwo />} />
      <Route path={Paths.PAGETREE} element={<PageTree />} />
    </Routes>
  );
}
