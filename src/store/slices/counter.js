import { createSlice } from "@reduxjs/toolkit";

// const INITIAL_STATE = {
//   counter_val: 0,
//   idsarray: [],
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter_val: [],
  },

  reducers: {
    removeCounter: (state, action) => {
      state.counter_val = state.counter_val.filter(
        (ele) => ele !== action.payload
      );
    },
    addCounter: (state, action) => {
      state.counter_val.push(action.payload);
    },
  },
});

export const { addCounter, removeCounter } = counterSlice.actions;

export default counterSlice.reducer;
