import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  const allfriends = friends.map((item) => {
    return (
      <FriendListItem
        name={item.name}
        avatar={item.avatar}
        isOnline={item.isOnline}
        key={item.id}
      />
    );
  });
  return (
    <ul className="friend-list" key="1">
      {allfriends}
    </ul>
  );
};

export default FriendList;
