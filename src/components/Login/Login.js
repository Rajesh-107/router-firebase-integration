import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div>
            <h2>This is login part</h2>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form>
            <input type="email" name="" id="" placeholder='enter your email' />
            <br />
            <input type="password" name="" id="" placeholder='enter password' />
            <br />
            <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;