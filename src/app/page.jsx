import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/component/featured/Featured";
import Category from "@/component/category/Category"
import Menu from "@/component/menu/Menu";
import CartList from "@/component/cartList/CartList"


export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return <>
    <div className={styles.container}>
      <Featured />
      <Category />
      <div className={styles.content}>
        <CartList page={page}/>
        <Menu />
      </div>
    </div>
  </>;
}
