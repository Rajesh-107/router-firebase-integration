import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is product</h2>
            <h3>{user ? user.displayName : 'still Nobody'}</h3>
        </div>
    );
};

export default Products;