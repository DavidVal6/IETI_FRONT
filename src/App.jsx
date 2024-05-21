import "./App.css";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import  RegisterPage  from "./pages/RegisterPage";

export function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}
export function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
export default App;
