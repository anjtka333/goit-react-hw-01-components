import TransactionItem from "./TransactionItem/TransactionItem";
import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <TransactionItem key={item.id} {...item} />
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
export default TransactionHistory;
