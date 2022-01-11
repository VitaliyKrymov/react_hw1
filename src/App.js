import './App.css';
import Users from "./components/Users";
import Comments from "./components/Comments";
import Posts from "./components/Posts";

export default App;

function App() {
    return (
        <div className="App">

            <Users/>

            <Posts/>
            
            <Comments/>
        </div>
    );
}
