import Link from "next/link";

const Gnb = () => (
  <nav className="gnb">
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Product List</Link>
      </li>
      <li>
        <Link href="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
);

export default Gnb;
