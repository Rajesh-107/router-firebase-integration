import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div>
            <h2>Please Register now!!</h2>
            <form>
            <input type="text" name="" id=""  placeholder='enter your name'/>
            <br />
            <input type="email" name="" id="" placeholder='enter your email' />
            <br />
            <input type="password" name="" id="" placeholder='enter password' />
            <br />
            <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;