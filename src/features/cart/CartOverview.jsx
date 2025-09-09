import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CartOverview = ({ isLoading }) => {
  const pizzasQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );

  const totalCartPrice = useSelector((state) =>
    state.cart.cart.reduce((total, item) => total + item.totalPrice, 0),
  );

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{pizzasQuantity} pizzas</span>
        <span>${totalCartPrice}</span>
      </p>
      <Link to="/cart" disabled={isLoading}>
        Open cart
      </Link>
    </div>
  );
};

export default CartOverview;
