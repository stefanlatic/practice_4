import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './Pages/Login';
import Navigation from './Partials/Navigation';
import { useReducer, createContext } from 'react';
import { getUsersInitialData, userReducer } from './Reducers/User';

export const UserContext = createContext();

function App() {

  const [userState, userDispatch] = useReducer(userReducer, getUsersInitialData());

  return (
    <BrowserRouter>
    <UserContext.Provider value={{userState, userDispatch}}>
      <Navigation />
      <Routes>
        <Route path="/Login" element={<Login></Login>} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
} 

export default App;
