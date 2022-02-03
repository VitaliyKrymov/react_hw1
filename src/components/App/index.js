import React from "react";
import {Routes,Route} from "react-router-dom";

import { open} from "../Utils/index.db";
import About from "../About";
import Home from "../Home";
import Statistics from "../Statistics";
import Header from "../Header";

import {Wrap, GlobalStyle} from "./styles";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            loading: true
        }
    }
    componentDidMount() {
        open().then(()=> {
            this.setState({
                loading: false
            })
        }).catch(()=>{
            console.error('Помилка')
        });
    }

    render() {
        if (this.state.loading){
            return <div>Loading...</div>
        }
        return (
                <Wrap>
                    <GlobalStyle/>
                   <Header/>
<Routes>
    <Route path={'/'} element ={<Home/>}/>
    <Route path={'/about'} element ={<About/>}/>
    <Route path={'/statistics'} element ={<Statistics/>}/>
</Routes>
                </Wrap>
        )
}
}

export default App;