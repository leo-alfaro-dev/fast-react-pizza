import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => {
    return state.user.username;
  });

  return username ? <div className="text-sm font-semibold">{username}</div> : null;
};

export default Username;
