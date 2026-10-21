const { addItem, removeItem, getTotalItems } = require('../cart');

describe('Shopping Cart Module', () => {
  let cart;

  beforeEach(() => {
    cart = {};
  });

  describe('addItem', () => {
    test('Positive: adds a new item with valid quantity', () => {
      addItem(cart, 'apple', 3);
      expect(cart['apple']).toBe(3);
    });

    test('Negative: ignores item with negative quantity', () => {
      addItem(cart, 'apple', -2);
      expect(cart['apple']).toBeUndefined();
    });

    test('Edge Case: ignores item with quantity of 0', () => {
      addItem(cart, 'apple', 0);
      expect(cart['apple']).toBeUndefined();
    });
  });

  describe('removeItem', () => {
    test('Positive: removes existing item from cart', () => {
      cart = { apple: 3, banana: 2 };
      removeItem(cart, 'apple');
      expect(cart['apple']).toBeUndefined();
      expect(cart['banana']).toBe(2);
    });

    test('Negative: handles attempting to remove item not in cart', () => {
      cart = { apple: 3 };
      removeItem(cart, 'orange');
      expect(cart).toEqual({ apple: 3 });
    });

    test('Edge Case: removes last item from cart leaving empty object', () => {
      cart = { apple: 1 };
      removeItem(cart, 'apple');
      expect(Object.keys(cart).length).toBe(0);
    });
  });

  describe('getTotalItems', () => {
    test('Positive: calculates total items correctly', () => {
      cart = { apple: 3, banana: 2 };
      expect(getTotalItems(cart)).toBe(5);
    });

    test('Negative: handles empty cart returning 0', () => {
      expect(getTotalItems(cart)).toBe(0);
    });

    test('Edge Case: handles large quantities correctly', () => {
      cart = { apple: 1000000, banana: 2000000 };
      expect(getTotalItems(cart)).toBe(3000000);
    });
  });
});
