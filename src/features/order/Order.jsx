// Test ID: IIDSAT

import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';

import { getOrder } from '../../services/apiRestaurant';
import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } =
    order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id}</h2>
        <div className="grow space-x-2 py-3 text-right">
          {priority && (
            <span className="rounded bg-red-500 p-1 uppercase tracking-wide text-red-200">
              Priority
            </span>
          )}
          <span className="rounded bg-green-500 p-1 uppercase tracking-wide text-green-200">
            <span className="font-bold">{status}</span> order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded bg-stone-200 p-5">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-b border-t border-stone-200">
        {cart.map((orderItem) => {
          return (
            <OrderItem
              key={orderItem.pizzaId}
              item={orderItem}
              ingredients={
                fetcher.data?.find((mi) => mi.id === orderItem.pizzaId)?.ingredients
              }
            />
          );
        })}
      </ul>

      <div className="space-y-1 bg-stone-200 p-5 text-sm text-stone-700">
        <div className="flex justify-between">
          <p>Price pizza:</p>
          <p>{formatCurrency(orderPrice)}</p>
        </div>
        {priority && (
          <div className="flex justify-between">
            <p>Price priority:</p>
            <p>{formatCurrency(priorityPrice)}</p>
          </div>
        )}
        <div className="flex justify-between font-bold">
          <p>To pay on delivery:</p>
          <p>{formatCurrency(orderPrice + priorityPrice)}</p>
        </div>
      </div>

      {!priority && <UpdateOrder />}
    </div>
  );
}

export const loader = async ({ params }) => {
  const data = getOrder(params.orderId);
  return data;
};

export default Order;
