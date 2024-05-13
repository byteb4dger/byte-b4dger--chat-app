import './userInfo.css';
import { useUserStore } from '../../../lib/userStore';
import Detail from '../../detail/Detail';

const UserInfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || './avatar.png'} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="right">
        <Detail />
      </div>
    </div>
  );
};

export default UserInfo;
