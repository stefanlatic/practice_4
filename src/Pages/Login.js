import users from '../data/users.json'
import { useState } from 'react';

console.log(users);

const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginError, setLoginError] = useState(null);

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
            }
        })
        if(!foundUser) {
            setLoginError("Nismo nasli korisnika sa tim kredencijalima")
        }
    }
    return (
        <>
            <form>
                <h2>{loginError}</h2>
                <input onInput={e => setUsername(e.target.value)} placeholder="Unesite Vas username" type="text"/>
                <input onInput={e => setPassword(e.target.value)} placeholder="Unesite lozinku" type="password"/>
                <button type='button' onClick={checkCredentials}>Login</button>
            </form>
        </>
    )
}

export default Login;