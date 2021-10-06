import React, { useState } from "react";

const CounterWithHooks = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3> You clicked { count } times! </h3>
            <button onClick={() => setCount(count+1) }> + </button>
        </div>
    )    
}

export default CounterWithHooks;