import { create } from "zustand";
import { favouritesSlice } from "./favourites-slice";
import { withSlices } from "zustand-slices";

export const useStore = create(withSlices(favouritesSlice));
