import { createSlice } from "zustand-slices";

const emptyObj = {
  cart: [],
  totalQuantity: 0,
};

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : emptyObj;

export const cartSlice = createSlice({
  name: "cart",
  value: initialState,
  actions: {
    addToCart: (newProduct) => {
      return (prevState) => {
        const foundIndex = prevState.cart.findIndex(
          (product) => product.id === newProduct.id
        );

        if (foundIndex !== -1) {
          const newCart = prevState.cart.map((product, index) => {
            if (index === foundIndex) {
              product.quantity += 1;
            }

            return product;
          });

          const newState = {
            cart: newCart,
            totalQuantity: prevState.totalQuantity + 1,
          };
          localStorage.setItem("cart", JSON.stringify(newState));

          return newState;
        } else {
          const newState = {
            cart: [...prevState.cart, { ...newProduct, quantity: 1 }],
            totalQuantity: prevState.totalQuantity + 1,
          };
          localStorage.setItem("cart", JSON.stringify(newState));

          return newState;
        }
      };
    },
    removeFromCart: (id) => {
      return (prevState) => {
        // TODO: reduce quantity until 1 then remove from array
      };
    },
  },
});
