import React from 'react';

const FoodsPage = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/comments');
    const foods = await res.json()
    console.log(foods);
    
    return (
        <div>
            <h1>foods : {foods.length}</h1>
        </div>
    );
};

export default FoodsPage;