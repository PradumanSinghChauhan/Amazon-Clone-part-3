import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {cart, removeFromCart} from '../data/cart.js';

renderOrderSummary();
renderPaymentSummary();


document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);

    container.remove();
    updateCartQuantity();
  });
});



function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-home')
    .innerHTML = `${cartQuantity} items`;
}

updateCartQuantity();


