import styles from "./statisticalData.module.scss";
import randColor from "./randColor";
import PropTypes from "prop-types";

const statisticalData = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>Upload stats</h2>}

    <ul className={styles.statList}>
      {stats.map(({ label, percentage, id }) => (
        <li
          key={id}
          className={styles.item}
          style={{ backgroundColor: randColor() }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

statisticalData.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
Function.defaultProps = {
  stats: [],
};

export default statisticalData;
