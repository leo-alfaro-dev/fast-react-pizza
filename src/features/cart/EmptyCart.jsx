import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="flex justify-center p-5">
      <p className="font-semibold">
        Your cart is still empty. Go to the menu to grab some 🍕
      </p>
    </div>
  );
}

export default EmptyCart;
