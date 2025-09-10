import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="flex items-center justify-end" method="PATCH">
      <Button type="primary">Mark as priority</Button>
    </fetcher.Form>
  );
};

export const action = async ({ request, params }) => {
  const payload = { priority: true };
  await updateOrder(params.orderId, payload);
  return null;
};

export default UpdateOrder;
