/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, useActionData, useNavigation, redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { clearCart, getCart } from '../cart/CartSlice.js';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store.js';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const currentUserName = useSelector((state) => {
    return state.user.username;
  });
  const [name, setName] = useState(currentUserName);

  const cart = useSelector(getCart);

  const navigation = useNavigation();
  const isSubmitting = navigation.state == 'submitting';

  const formErrors = useActionData();

  const controlDivCss =
    'grid grid-cols-[120px_1fr] items-center md:items-start gap-x-2 pb-2 md:grid-cols-[120px_250px]';

  return cart && cart.length > 0 ? (
    <div className="flex flex-wrap p-2">
      <div className="w-full">
        <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      </div>

      <Form method="POST" className="w-full md:w-1/2 lg:w-1/3">
        <div className={controlDivCss}>
          <label className="flex items-center">Name</label>
          <input
            className="input-text"
            type="text"
            name="customer"
            value={name}
            onChange={(e) => setName(e.value)}
            required
          />
        </div>
        <div className={controlDivCss}>
          <label className="flex items-center">Phone number</label>
          <div className="w-full">
            <input className="input-text" type="tel" name="phone" required />
            {formErrors?.phone ? (
              <p className="pl-2 text-sm font-semibold text-red-600">
                {formErrors?.phone}
              </p>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className={controlDivCss}>
          <label className="flex items-center">Address</label>
          <input className="input-text" type="text" name="address" required />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>

        <div className="flex pb-2">
          <input
            className="mr-2 h-6 w-6 accent-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="items-center">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? 'Submitting' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  ) : (
    <EmptyCart></EmptyCart>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  const newOrder = await createOrder(order);

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = 'Incorrect phone';

  //Do NOT overuse
  store.dispatch(clearCart());

  if (Object.keys(errors).length > 0) return errors;

  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
