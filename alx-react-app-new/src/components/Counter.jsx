import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <div>
            <p>Current Count: {count}</p>

            <div style={{ display: "flex", justifyContent: 'center', gap: "2rem" }}>
                <button onClick={increaseCount}>Increment</button>
                <button onClick={decreaseCount}>Decrement</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    );
}

export default Counter