import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

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

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
export default FriendListItem;
