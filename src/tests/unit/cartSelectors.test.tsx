import cartReducer, { addItem } from '../../store/cartSlice';

test('adds item to cart', () => {
  const product = { id: '1', name: 'Bike', price: 100, description: 'Desc', image: 'img', category: 'Bikes' };
  const state = cartReducer(undefined, addItem(product));
  expect(state.items).toHaveLength(1);
  expect(state.items[0].product).toEqual(product);
});