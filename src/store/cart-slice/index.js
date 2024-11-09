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
        const currentState = {
          cart: prevState.cart || [],
          totalQuantity: prevState.totalQuantity || 0,
        };

        const foundIndex = currentState.cart.findIndex(
          (product) => product.id === newProduct.id
        );

        if (foundIndex !== -1) {
          const newCart = currentState.cart.map((product, index) => {
            if (index === foundIndex) {
              return { ...product, quantity: product.quantity + 1 };
            }
            return product;
          });

          const newState = {
            cart: newCart,
            totalQuantity: currentState.totalQuantity + 1,
          };
          localStorage.setItem("cart", JSON.stringify(newState));

          return newState;
        } else {
          const newState = {
            cart: [...currentState.cart, { ...newProduct, quantity: 1 }],
            totalQuantity: currentState.totalQuantity + 1,
          };
          localStorage.setItem("cart", JSON.stringify(newState));

          return newState;
        }
      };
    },
    removeFromCart: (id) => {
      return (prevState) => {
        const currentState = {
          cart: prevState.cart || [],
          totalQuantity: prevState.totalQuantity || 0,
        };

        const foundIndex = currentState.cart.findIndex(
          (product) => product.id === id
        );

        if (foundIndex !== -1) {
          const product = currentState.cart[foundIndex];

          if (product.quantity > 1) {
            const newCart = currentState.cart.map((item, index) => {
              if (index === foundIndex) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });

            const newState = {
              cart: newCart,
              totalQuantity: currentState.totalQuantity - 1,
            };
            localStorage.setItem("cart", JSON.stringify(newState));

            return newState;
          } else {
            const newCart = currentState.cart.filter((item) => item.id !== id);

            const newState = {
              cart: newCart,
              totalQuantity: currentState.totalQuantity - 1,
            };
            localStorage.setItem("cart", JSON.stringify(newState));

            return newState;
          }
        }

        return currentState;
      };
    },
  },
});
