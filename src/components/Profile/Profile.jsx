import s from "./Profile.module.css";
import PropTypes from "prop-types";
const Profile = ({ name, tag, location, avatar, stats }) => {
  const st = Object.entries(stats).map(([key, value]) => (
    <li key={key}>
      <span className={s.label}>{key}</span>
      <span className={s.quantity}>{value}</span>
    </li>
  ));

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className={s.stats}>{st}</ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
export default Profile;
