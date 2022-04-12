import { atom, selector, selectorFamily } from "recoil";

export const cartState = atom<Map<string, number>>({
  key: "cartState",
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number | undefined, string>({
  key: "cartItem",
  get:
    (id: string) =>
    ({ get }) => {
      const cart = get(cartState);
      return cart.get(id);
    },
  set:
    (id: string) =>
    ({ set, get }, newValue) => {
      if (typeof newValue === "number") {
        const newCart = new Map(get(cartState));
        newCart.set(id, newValue);
        set(cartState, newCart);
        console.log(newCart);
      }
    },
});
