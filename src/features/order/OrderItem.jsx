import { formatCurrency } from '../../utils/helpers';
import PropTypes from 'prop-types';

function OrderItem({ item, ingredients = [] }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-1">
      <div className="text-10 flex justify-between font-semibold">
        <p>
          {quantity} {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <span className="text-xs capitalize italic">{ingredients.join(', ')}</span>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.array,
};

export default OrderItem;
