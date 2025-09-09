import { useDispatch } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './CartSlice';
import Button from '../../ui/Button';

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  const onDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const onIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 px-1">
      <Button type="rounded" onClick={onDecrease} aria-label="Decrease quantity">
        -
      </Button>
      <span>{quantity}</span>
      <Button type="rounded" onClick={onIncrease} aria-label="Increase quantity">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
