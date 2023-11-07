const INITIAL_STORE = {
  count: 1
};

const counterReducer = (state = INITIAL_STORE, action) => {
  if (action.type == "INCREMENT") {
    return { count: state.count + 1 };
  } else {
    return { count: state.count - 1 };
  }
  return state;
};
export default counterReducer;
