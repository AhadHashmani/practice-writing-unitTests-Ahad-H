function addItem(cart, item, quantity) {
  if (!cart || typeof cart !== 'object') return cart;
  if (!item || typeof item !== 'string') return cart;
  if (typeof quantity !== 'number' || quantity <= 0) return cart;

  cart[item] = (cart[item] || 0) + quantity;
  return cart;
}

function removeItem(cart, item) {
  if (!cart || typeof cart !== 'object') return cart;
  if (cart[item] !== undefined) {
    delete cart[item];
  }
  return cart;
}

function getTotalItems(cart) {
  if (!cart || typeof cart !== 'object') return 0;
  
  return Object.values(cart).reduce((total, quantity) => {
    return typeof quantity === 'number' && quantity > 0 ? total + quantity : total;
  }, 0);
}

module.exports = { addItem, removeItem, getTotalItems };
