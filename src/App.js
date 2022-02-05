import React, {useState} from "react";
import Counter from "./components/Counter/Counter";
import ClassCounter from "./components/Counter/ClassCounter";

function App() {

    const [value, setValue] = useState('');
    const [choice, setChoice] = useState('');


    return (
        <div className="App">
            <h1> Input value: {value} </h1>
            <input
                type="text"
                onChange={event => setValue(event.target.value)}
            />

            <Counter/>

            <ClassCounter/>

            <br/>
            <h2> Вибір: {choice} </h2>
            <form>
                <p><input list="cocktail"
                          onChange={event => setChoice(event.target.value)}/>
                    Вибери зі списку
                </p>
                <datalist id="cocktail">
                    <option>Аперитивы</option>
                    <option>Горячие</option>
                    <option>Десертные</option>
                    <option>Диджестивы</option>
                    <option>Молочные</option>
                    <option>Слоистые</option>
                </datalist>
            </form>
        </div>
    );
}

export default App;


