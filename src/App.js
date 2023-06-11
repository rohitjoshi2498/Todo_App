import "./App.css";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Navigate to ="/login/"/>} />
        <Route  path="/login/" element={<Login></Login>} />
        <Route  path="/dashboard/" element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
