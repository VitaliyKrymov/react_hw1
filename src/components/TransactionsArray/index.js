import Transactions from "../Transactions";

const TransactionsArray = (props)=>(
    <div>
        {
            props.transactions.map((transactions) => <Transactions key = {transactions.id} transactions={transactions}/>)
        }
    </div>
)

export default TransactionsArray;