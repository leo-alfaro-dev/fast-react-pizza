import UserName from '../features/user/Username';
import SearchOrder from '../features/order/SearchOrder';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ isLoading }) => {
  return (
    <>
      <header className="flex items-center justify-between border-b border-stone-400 bg-yellow-400 p-4 sm:px-6">
        <Link to="/" className="tracking-[5px]">
          <span className="uppercase">Leo React Pizza 🍕</span>
        </Link>
        <div className="flex items-center gap-6">
          <SearchOrder disabled={isLoading} />
          <UserName />
        </div>
      </header>
    </>
  );
};

export default Header;
