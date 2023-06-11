import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './components/Login';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login></Login>} />
        <Route exact path="/login/" element={<Login></Login>} />
        <Route exact path="/dashboard/" element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
