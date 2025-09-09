import CreateUser from '../features/user/CreateUser';
import { useSelector } from 'react-redux';
import Button from './Button';

function Home() {
  const currentUserName = useSelector((state) => {
    return state.user.username;
  });

  return (
    <div className="m-10 text-center">
      <h1 className="mb-8 text-xl font-semibold text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {currentUserName ? (
        <Button to="/menu" type="primary">
          Continue Ordering {currentUserName}
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
