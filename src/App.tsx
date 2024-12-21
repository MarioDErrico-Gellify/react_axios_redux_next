import { Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import { DefaultPath, Paths } from "./hook/useNavigation";
import PageOne from "./pages/pageone";
import PageTwo from "./pages/pageTwo";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={DefaultPath} />} />
      <Route path={Paths.PAGEONE} element={<PageOne />} />
      <Route path={Paths.PAGETWO} element={<PageTwo />} />
    </Routes>
  );
}
