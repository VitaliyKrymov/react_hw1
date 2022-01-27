import {Component} from "react";

import Balance from "../Balance";


class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0
        }
        this.onIncrise = this.onIncrise.bind(this);
        console.log("constructor")
    }

    componentDidMount() {
        window.localStorage.setItem('balance',JSON.stringify(this.state.balance));
        const balance =JSON.parse(window.localStorage.getItem('balance'));

        this.setState({
            balance
        })
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        window.localStorage.setItem('balance',JSON.stringify(this.state.balance));

    }

    onIncrise () {
        this.setState({
            balance: this.state.balance + 1,
        })
        console.log(JSON.stringify(this.state.balance+1))
        window.localStorage.setItem('balance',JSON.stringify(this.state.balance+1));
    }
                                    //Arrow function automatic add context when it create and
                                    //this.onIncrise = this.onIncrise.bind(this); not use
    onDecrise= () =>{
        this.setState({
            balance: this.state.balance - 1
        })
        console.log(JSON.stringify(this.state.balance-1))
        window.localStorage.setItem('balance',JSON.stringify(this.state.balance-1));
    }


    render() {
        console.log("render")
        return (
            <div>
                <Balance balance={this.state.balance}/>
                 <button onClick={(this.onIncrise)}
                 >Додати 1</button>

                <button onClick={(this.onDecrise)}
                 >Відняти 1</button>

            </div>
        )
    }
}

export default App;