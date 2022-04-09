import { atom, selector, selectorFamily, useRecoilValue } from "recoil";

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
        console.log(newValue);
        const newCart = get(cartState).set(id, newValue);
        console.log(newCart);
        set(cartState, newCart);
      }
    },
});
