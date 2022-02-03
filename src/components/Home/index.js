import {Component} from "react";

import Balance from "../Balance";
import Transactions from "../Transactions";
import Form from "../Form";
import ErrorBoundary from "../ErrorBoundary"

import {Wrap} from "./styles";

import {getItems} from "../Utils/index.db";

let id = 0;

class Home extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: []
        }

        this.onChange = this.onChange.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        debugger
        getItems().then((date)=>{
            debugger
        }).catch((e)=>{
            debugger
        })
    }

    onChange = ({value,date,comment}) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{
                value : + value,
                comment,
                date,
                id: ++id
            },
                ...state.transactions]
        }))
    }

    render() {
        return (
            <ErrorBoundary>
                <Wrap>
                    <Balance balance={this.state.balance}/>
                    <Form onChange={this.onChange}/>
                    <hr/>
                    <Transactions transactions={this.state.transactions}/>
                </Wrap>
            </ErrorBoundary>

        )
    }
}

export default Home;