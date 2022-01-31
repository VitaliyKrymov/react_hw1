import transactions from "../Transactions";

const Transaction = ({transaction}) => (
    <div >
        Label:{transaction.label}
        <p>Value:{transaction.value}</p>
        <br/>
    </div>
);

export default Transaction;