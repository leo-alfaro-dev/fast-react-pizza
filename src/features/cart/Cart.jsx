import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex flex-col flex-wrap">
      <LinkButton to="/menu" className="text-sm text-blue-500 hover:text-blue-600">
        &larr; Back to menu
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, %NAME%</h2>

      <div className="p-4">
        <div className="grid grid-cols-[1fr_auto_auto] divide-y divide-stone-200 border-y">
          {cart.map((item) => {
            return <CartItem item={item} key={item.pizzaId}></CartItem>;
          })}
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button type="secondary">Clear cart</Button>
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
}

export default Cart;
