import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import defaultImage from '../images/default.jpg';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className={s.item} key={id}>
        <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
        <img className={s.avatar} src={avatar} alt="" width="48" />
        <span className={s.name}>{name}</span>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: defaultImage,
    }),
  ),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
