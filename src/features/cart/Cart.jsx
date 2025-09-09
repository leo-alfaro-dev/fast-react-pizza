import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { getCart, clearCart } from './CartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();
  const currentUserName = useSelector((state) => {
    return state.user.username;
  });

  const cart = useSelector(getCart);

  return (
    <div className="flex flex-col flex-wrap">
      <LinkButton to="/menu" className="text-sm text-blue-500 hover:text-blue-600">
        &larr; Back to menu
      </LinkButton>

      {cart.length > 0 ? (
        <>
          <h2 className="mt-7 text-xl font-semibold">Your cart, {currentUserName}</h2>
          <div className="p-4">
            <div className="grid grid-cols-[1fr_auto_auto] divide-y divide-stone-200 border-y">
              {cart.map((item) => {
                return <CartItem item={item} key={item.pizzaId}></CartItem>;
              })}
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button
              type="secondary"
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear cart
            </Button>
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
