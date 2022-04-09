import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Home.css';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is home</h2>
            <p>Current user is:{user? user.displayName : 'Nobody'}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;