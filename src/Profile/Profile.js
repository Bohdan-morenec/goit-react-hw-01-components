import styles from "./Profile.module.scss";
import PropTypes from "prop-types";

const Profile = ({
  name,
  tag,
  location,
  avatar = "http://rostov-gorod.ru/local/templates/markup/img/70_no-img.jpg",
  stats,
}) => (
  <div className={styles.profile}>
    <div>
      <img
        className={styles.descriptioImg}
        src={avatar}
        alt="Аватар пользователя"
      />
      <p className={styles.profileName}>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={styles.profileList}>
      <li key="id-1" className={styles.profileItem}>
        <span>Followers</span>
        <span className={styles.profileListSpam}>{stats.followers}</span>
      </li>
      <li key="id-2">
        <span>Views</span>
        <span className={styles.profileListSpam}>{stats.views}</span>
      </li>
      <li key="id-3">
        <span>Likes</span>
        <span className={styles.profileListSpam}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Profile;
