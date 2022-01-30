import {Component} from "react";

import Balance from "../Balance";
import TransactionsArray from "../TransactionsArray";
import Form from "../Form";

let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 5,
            transactions: []
        }
        this.onIncrise = this.onIncrise.bind(this);
        console.log("constructor")
    }

    componentDidMount() {
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance));
        const balance = JSON.parse(window.localStorage.getItem('balance'));

        this.setState({balance})
        // console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        window.localStorage.setItem('balance', JSON.stringify(this.state.balance));

    }

    onIncrise() {
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
    onDecrise = () => {
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
        // console.log("render")
        return (
            <div>
                <Balance balance={this.state.balance}/>
                {/*<button onClick={(this.onIncrise)}*/}
                {/*>Додати 1*/}
                {/*</button>*/}

                {/*<button onClick={(this.onDecrise)}*/}
                {/*>Відняти 1*/}
                {/*</button>*/}

                <Form/>
                <hr/>
                {/*замінимо цей вивід виводом списків*/}
                {/*{this.state.transactions.length === 0*/}
                {/*    ? 'Ще нема транзакцій'*/}
                {/*    : JSON.stringify(this.state.transactions)}*/}
                <TransactionsArray transactions={this.state.transactions}/>
            </div>
        )
    }
}

export default App;