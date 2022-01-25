import {Routes,Route,Link} from "react-router-dom";

function App() {
    return (
        <div>
            <ul>
                <li> <Link to={'/'}>Home</Link> </li>
                <li> <Link to={'/layout'}>Layout</Link> </li>
            </ul>

            <Routes>

            </Routes>

        </div>
    );
}

export default App;
