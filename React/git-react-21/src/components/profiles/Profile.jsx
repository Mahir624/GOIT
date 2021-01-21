import defaultImage from '../images/default.jpg';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
