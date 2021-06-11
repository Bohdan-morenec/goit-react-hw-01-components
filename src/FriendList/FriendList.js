import FriendListItem from "./FriendListItem";
import styles from "./friends.module.scss";

const friends = ({ friends }) => (
  <div>
    <ul>
      {friends.map((friend) => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  </div>
);

export default friends;
