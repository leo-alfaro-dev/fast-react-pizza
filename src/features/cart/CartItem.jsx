import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <div className="col-span-3 grid grid-cols-subgrid items-center gap-2 py-1">
      <p>
        {quantity}&times; {name}
      </p>
      <p>{formatCurrency(totalPrice)}</p>
      <Button type="small">X</Button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
