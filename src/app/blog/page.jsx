import CartList from '@/component/cartList/CartList'
import styles from './blogPage.module.css'
import Menu from '@/component/menu/Menu'

function BlogPage({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CartList page={page} cat={cat} />
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage