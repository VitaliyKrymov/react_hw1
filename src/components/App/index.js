import {Component} from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";

let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 5,
            transactions: []
        }
        // this.onIncrise = this.onIncrise.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance));
        const balance = JSON.parse(window.localStorage.getItem('balance'));
        this.setState({balance});
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance));

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('shouldComponentUpdate');
    //     console.log(this.state);
    //
    //     // return false    //component will not render
    //     // return nextState.balance < 0   //component  render than  balance <0
    // }

    onIncrease = () => {
        this.setState((state) => ({
            balance: state.balance + 1,
            transactions: [{
                lable: 'increase',
                value: 1,
                id: ++id
            }, ...state.transactions]
        }))
        // console.log(JSON.stringify(this.state.balance+1))
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance + 1));
    }

    //Arrow function automatic add context when it create and
    //this.onIncrise = this.onIncrise.bind(this); not use

    onDecrease = () => {
        this.setState((state) => ({
            balance: state.balance - 1,
            transactions: [{
                lable: 'decrease',
                value: -1,
                id: ++id
            }, ...state.transactions]
        }))
        // console.log(JSON.stringify(this.state.balance-1))
        // window.localStorage.setItem('balance',JSON.stringify(this.state.balance-1));
        window.localStorage.setItem('balance', this.state.balance - 1);
    }

    render() {
        console.log("render")
        return (
            <div>
                <Balance balance={this.state.balance}/>
                <button onClick={this.onIncrease}> Додати1</button>;
                <button onClick={this.onDecrease}> Відняти1 </button>
                <hr/>
               <Transactions transactions={this.state.transactions}/>

            </div>
        )
    }
}

export default App;