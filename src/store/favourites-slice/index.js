import { createSlice } from "zustand-slices";

export const favouritesSlice = createSlice({
  name: "favourites",
  value: [],
  actions: {
    addToFavList: (newProduct) => {
      return (prevState) => {
        const foundIndex = prevState.findIndex(
          (product) => product.id === newProduct.id
        );

        if (foundIndex !== -1) {
          return prevState;
        } else {
          return [...prevState, newProduct];
        }
      };
    },
    removeFromFavList: (id) => {
      return (prevState) => {
        const foundIndex = prevState.findIndex((product) => product.id === id);
        if (foundIndex === -1) {
          return prevState;
        }

        return prevState.filter((product) => product.id !== id);
      };
    },
  },
});
