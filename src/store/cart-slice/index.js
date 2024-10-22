import { createSlice } from "zustand-slices";

export const cartSlice = createSlice({
  name: "cart",
  value: {
    cart: [],
    totalQuantity: 0,
  },
  actions: {
    addToCart: (newProduct) => {
      return (prevState) => {
        const foundIndex = prevState.cart.findIndex(
          (product) => product.id === newProduct.id
        );

        if (foundIndex !== -1) {
          const newState = prevState.cart.map((product, index) => {
            if (index === foundIndex) {
              product.quantity += 1;
            }

            return product;
          });

          return { cart: newState, totalQuantity: prevState.totalQuantity + 1 };
        } else {
          return {
            cart: [...prevState.cart, { ...newProduct, quantity: 1 }],
            totalQuantity: prevState.totalQuantity + 1,
          };
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
