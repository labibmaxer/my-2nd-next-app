"use client"
import React, { useState } from 'react';
 const Counter = () => {
    const [counter, setcouner ] = useState (0);

    return (
        <div>
            <h1>this is a Counter: {counter} </h1>
           <button onClick={() => setcouner (counter + 1)}>increase</button>
        </div>
    );
};

export default Counter;