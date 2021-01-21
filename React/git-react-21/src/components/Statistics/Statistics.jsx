import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, statistics }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>Upload stats</h2>}

    <ul className={s.stat}>
      {statistics.map(({ id, label, percentage = 0 }) => (
        <li className={s.item} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lable: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
