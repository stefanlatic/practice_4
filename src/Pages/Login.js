import users from '../data/users.json'
import { useContext, useEffect, useReducer, useState } from 'react';
import { getUsersInitialData, initialUserData, userReducer } from '../Reducers/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../App';

console.log(users);

const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const {userState, userDispatch} = useContext(UserContext);
    console.log(userState);

    const checkCredentials = () => {
        if( username === null || password === null || username.trim() === '' || password.trim() === '') {
            setLoginError("Niste uneli sifru ili korisnicko ime")
            return;
        }
        let foundUser = false;
        users.forEach((user, index) =>{
            if(user.username === username && user.password === password) {
                foundUser = true;
                setLoginError(null);
                userDispatch({type:"SET_USERNAME", payload: username});
                userDispatch({type:"SET_IS_LOGGED_IN", payload: true});
                userDispatch({type:"SET_IS_LOGIN_TIME", payload: new Date().getTime()});
            }
        })
        if(!foundUser) {
            setLoginError("Nismo nasli korisnika sa tim kredencijalima")
        }
    }
    useEffect(() => {
        if(userState.isLoggedIn) {
            localStorage.setItem("userData", JSON.stringify(userState));
         }
    }, [userState]);

    const showLoginFields = () => {

    }

    return (
        <>
        {!userState.isLoggedIn &&
            <form>
                <h2>{loginError}</h2>
                <input onInput={e => setUsername(e.target.value)} placeholder="Unesite Vas username" type="text"/>
                <input onInput={e => setPassword(e.target.value)} placeholder="Unesite lozinku" type="password"/>
                <button type='button' onClick={checkCredentials}>Login</button>
            </form>
}
        </>
    )
}

export default Login;