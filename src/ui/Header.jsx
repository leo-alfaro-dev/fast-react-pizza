import UserName from '../features/user/User';
import SearchOrder from '../features/order/SearchOrder';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-400 p-4 uppercase sm:px-6">
        <Link to="/" className="tracking-[5px]">
          Fast React Pizza
        </Link>
        <SearchOrder />
        <UserName />
      </header>
    </>
  );
};

export default Header;
