import React from "react";
import {Link,Routes,Route} from "react-router-dom"
import {Home} from "./pages/home/Home"
import {Pokemons} from "/home/pokemons/Pokemons"



function App() {
    return (
        <div className="App">
            <div>
                <ul >
                    <li>
                        <Link to={'/'}>home</Link>
                        <Link to={'/pokemons-page'}>home</Link>
                    </li>
                    <li></li>
                </ul>

            </div>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/pokemons-page'} element={<Pokemons/>}/>
            </Routes>
        </div>
    );
}

export default App;
