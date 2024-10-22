import { createSlice } from "zustand-slices";

const initialState = localStorage.getItem("favs")
  ? JSON.parse(localStorage.getItem("favs"))
  : [];

export const favouritesSlice = createSlice({
  name: "favourites",
  value: initialState,
  actions: {
    addToFavList: (newProduct) => {
      return (prevState) => {
        const foundIndex = prevState.findIndex(
          (product) => product.id === newProduct.id
        );

        if (foundIndex !== -1) {
          return prevState;
        } else {
          const newState = [...prevState, newProduct];
          localStorage.setItem("favs", JSON.stringify(newState));

          return newState;
        }
      };
    },
    removeFromFavList: (id) => {
      return (prevState) => {
        const foundIndex = prevState.findIndex((product) => product.id === id);
        if (foundIndex === -1) {
          return prevState;
        }

        const newState = prevState.filter((product) => product.id !== id);
        localStorage.setItem("favs", JSON.stringify(newState));

        return newState;
      };
    },
  },
});
