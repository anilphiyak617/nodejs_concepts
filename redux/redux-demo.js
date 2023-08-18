const redux = require("redux");

// reducer function recieves (state and action as an arguement)
const counterReducer = (state = { counter: 0 }, action:) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decreament") {
    return {
      counter: state.counter - 1,
    };
  }
};

// # creating a store
const store = redux.legacy_createStore(counterReducer);

console.log(store.getState());

// # fucntion that want the subscription to the store
const counterSubscriber = () => {
  console.log(store.getState());
};

// # subscribing to store to acess the data
store.subscribe(counterSubscriber);
// # dispatching an actions
store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
