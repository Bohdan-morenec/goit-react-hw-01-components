import FriendListItem from "./FriendListItem";

const friends = ({ friends }) => (
  <div>
    <ul>
      <FriendListItem friends={friends} />
    </ul>
  </div>
);

export default friends;
