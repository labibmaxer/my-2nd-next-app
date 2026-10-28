import FoodCart from '@/components/FoodCart';
import React from 'react';

const FoodsPage = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/comments');
    const foods = await res.json()
    console.log(foods);
    
    return (
        <div>
            <h1>foods : {foods.length}</h1>
            <div className='grid grid-cols-4 gap-4'>
                            {foods.map(food => <FoodCart food={food} key={food.id}> </FoodCart>)}

            </div>
         </div>
    );
};

export default FoodsPage;