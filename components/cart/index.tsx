import { createRef, SyntheticEvent, useRef } from "react";
import { CartType } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ items }: { items: CartType[] }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSelectAll = (e: SyntheticEvent) => {
    const targetInput = e.target as HTMLInputElement;

    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const selectedItemCnt = data.getAll("selected-item").length;

    const checkboxes = formRef.current?.querySelectorAll<HTMLInputElement>(
      ".cart-item__checkbox"
    );

    if (targetInput.classList.contains("cart__select-all")) {
      const allChecked = targetInput.checked;
      checkboxes.forEach((inputElem) => {
        inputElem.checked = allChecked;
      });
    } else {
      const allChecked = selectedItemCnt === items.length;
      console.log(allChecked);
      formRef.current.querySelector<HTMLInputElement>(
        ".cart__select-all"
      )!.checked = allChecked;
    }
  };
  return (
    <>
      <form ref={formRef} onChange={handleSelectAll}>
        <label>
          <input
            className="cart__select-all"
            name={`select-all`}
            type="checkbox"
          />
          select all
        </label>
        <ul className="cart">
          {items.map((item, i) => (
            <CartItem {...item} key={item.id} />
          ))}
        </ul>
      </form>
    </>
  );
};

export default CartList;
