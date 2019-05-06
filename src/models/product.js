export default {
  namespace: 'products',
  state: [
    {
      name: "antd1",
      id: 3
    }
  ],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};