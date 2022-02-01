import Transaction from "../Transaction";
import PropTypes from "prop-types";

const Transactions = ({transactions=[]})=>transactions.map((transaction) => <Transaction key = {transaction.id} transaction={transaction}/>
)

Transactions.propTypes={
    transactions: PropTypes.array
}
// Transactions.defaultProps={  // це ми прописуємо в рядку деструктуризації {transactions=[]}
//     transactions: []
// }

export default Transactions;