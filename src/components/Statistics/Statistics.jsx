import s from "./Statistics.module.css";
import PropTypes from "prop-types";
import { getRandomColor } from "../../utils/colorGen";
const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map((item) => (
          <li
            key={item.id}
            className={s.item}
            style={{ background: getRandomColor() }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
  title: PropTypes.string,
};
export default Statistics;
