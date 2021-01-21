import PropTypes from 'prop-types';
import s from './Transactions.module.css';

function Transactions({ items }) {
  return (
    <table className={s.transactions}>
      <thead>
        <tr className={s.table}>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.row}>
            <td className={s.item}>{type}</td>
            <td className={s.item}>{amount}</td>
            <td className={s.item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
