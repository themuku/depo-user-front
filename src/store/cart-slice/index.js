import { createSlice } from "zustand-slices";

export const cartSlice = createSlice({
  name: "cart",
  value: [],
  actions: {
    addToCart: (id) => {
      return (prevState) => {
        if (prevState.includes(id)) {
          return prevState;
        }

        return [...prevState, id];
      };
    },
    removeFromCart: (id) => {
      return (prevState) => {
        if (!prevState.includes(id)) {
          return prevState;
        }

        //

        return prevState.filter((prevId) => prevId !== id);
      };
    },
  },
});
