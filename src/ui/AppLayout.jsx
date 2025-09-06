import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-100">
        <Header isLoading={isLoading} />
        <main className="relative min-h-0">
          {isLoading && <Loader />}
          <div className="h-full overflow-auto p-2">
            <Outlet />
          </div>
        </main>
        <CartOverview isLoading={isLoading}></CartOverview>
      </div>
    </>
  );
};

export default AppLayout;
