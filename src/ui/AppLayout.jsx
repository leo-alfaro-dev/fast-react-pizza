import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-gray-100">
      <Header />
      <main className="mx-auto max-w-3xl overflow-auto">
        <Outlet />
      </main>
      <CartOverview></CartOverview>
    </div>
  );
};

export default AppLayout;
