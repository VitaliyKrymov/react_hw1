import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('');

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div className="App">
            <h1> Value: {value} </h1>
            <h2> Likes:{likes} </h2>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input
                title='title'
                type="text"
                tabIndex='1'
                onChange={event => setValue(event.target.value)}>
            </input>
        </div>
    );
}

export default App;


