import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Login" element={<Login></Login>} />
    <Route />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
