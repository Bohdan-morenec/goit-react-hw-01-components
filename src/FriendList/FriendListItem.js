import PropTypes from "prop-types";
import styles from "./friends.module.scss";

const FriendListItem = ({ friends }) =>
  friends.map(
    ({
      id,
      isOnline,
      avatar = "http://rostov-gorod.ru/local/templates/markup/img/70_no-img.jpg",
      name,
    }) => (
      <li className={styles.item} key={id}>
        {isOnline ? (
          <span className={styles.status}></span>
        ) : (
          <span className={styles.statusFalse}></span>
        )}

        <span></span>
        <img className={styles.avatar} src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
      </li>
    )
  );

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
    })
  ),
};
FriendListItem.defaultProps = {
  friends: [],
};

export default FriendListItem;
