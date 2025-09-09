import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './CartSlice';
import PropTypes from 'prop-types';

const DeleteItemButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const deleteCartItem = (e) => {
    console.log('deleteCartItem', pizzaId);
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="secondary" onClick={deleteCartItem}>
      Delete
    </Button>
  );
};

DeleteItemButton.propTypes = {
  pizzaId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DeleteItemButton;
