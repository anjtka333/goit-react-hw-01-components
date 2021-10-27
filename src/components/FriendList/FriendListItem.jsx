import s from "./FriendListItem.module.css";
const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span
        className={`${s.status} ${isOnline ? s.isOnline : s.isOffline}`}
      ></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
