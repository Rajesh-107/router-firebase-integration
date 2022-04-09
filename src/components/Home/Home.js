import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home</h2>
            <p>Current user is:{user? user.displayName : 'Nobody'}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;