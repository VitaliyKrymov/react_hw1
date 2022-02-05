import React, {useState} from "react";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";


function App() {
    const [value, setValue] = useState('');

    return (
        <div className="App">
            <div className = 'post' >
                <div className= 'post_content'>
                    <strong>1. JavaScript</strong>
                    <div>
                        JavaScript!!!!!!!!
                    </div>
                    <div className="post__btns">
                        <button>Удалить пост</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;


