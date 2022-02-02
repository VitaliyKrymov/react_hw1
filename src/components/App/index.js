import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import About from "../About";
import Home from "../Home";
import Statistics from "../Statistics";

import {Wrap, GlobalStyle} from "./styles";

const App = () => {
        return (
                <Wrap>
                    <GlobalStyle/>
                    <nav style={{
                            borderBottom: "solid 1px",
                            paddingBottom: "1rem"
                        }}>

                        <Link to="/">Home</Link> | {" "}
                        <Link to="/about">About</Link> | {" "}
                        <Link to="/statistics">Statistics</Link>
                    </nav>
<Routes>
    <Route path={'/'} element ={<Home/>}/>
    <Route path={'/about'} element ={<About/>}/>
    <Route path={'/statistics'} element ={<Statistics/>}/>
</Routes>
                </Wrap>
        )
}

export default App;