import { createSlice } from "zustand-slices";

export const favouritesSlice = createSlice({
  name: "favourites",
  value: [],
  actions: {
    addToFavList: (id) => {
      return (prevState) => {
        if (prevState.includes(id)) {
          return prevState;
        }

        return [...prevState, id];
      };
    },
    removeFromFavList: (id) => {
      return (prevState) => {
        if (!prevState.includes(id)) {
          return prevState;
        }

        return prevState.filter((prevId) => prevId !== id);
      };
    },
  },
});
