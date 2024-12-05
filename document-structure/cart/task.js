
const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const btnIncrease = product.querySelector('.product__quantity-control_inc');
  const btnDecrease = product.querySelector('.product__quantity-control_dec');
  const addToCartBtn = product.querySelector('.product__add');

  btnIncrease.addEventListener('click', () => {
    quantityValue.textContent = parseInt(quantityValue.textContent) + 1;
  });

  btnDecrease.addEventListener('click', () => {
    const currentValue = parseInt(quantityValue.textContent);
    if (currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }
  });

  addToCartBtn.addEventListener('click', () => {
    const productId = product.dataset.id;
    const productImageSrc = product.querySelector('.product__image').src;
    const productQuantity = parseInt(quantityValue.textContent);

    let cartProduct = [...cartProducts.children].find(
      (item) => item.dataset.id === productId
    );

    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector('.cart__product-count');
      cartProductCount.textContent =
        parseInt(cartProductCount.textContent) + productQuantity;
    } else {3
      const newCartProduct = document.createElement('div');
      newCartProduct.classList.add('cart__product');
      newCartProduct.dataset.id = productId;

      newCartProduct.innerHTML = `
        <img class="cart__product-image" src="${productImageSrc}" alt="">
        <div class="cart__product-count">${productQuantity}</div>
      `;

      cartProducts.appendChild(newCartProduct);
    }
  });
});
