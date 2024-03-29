import Menu from '@/component/menu/Menu'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Comment from '@/component/comment/Comment'

const getData = async (slug) => {
    const res = await fetch(
        `${process.env.URL}/api/posts/${slug}`, {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("Failed")
    }

    return res.json()
}

const singlePage = async ({ params }) => {
    const { slug } = params

    const data = await getData(slug)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data?.title}</h1>
                    <div className={styles.user}>
                        {data?.user?.image && (<div className={styles.userImageContainer}>
                            <Image src={data.user.image} alt="" fill className={styles.avatar} />
                        </div>)}
                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>{data?.user.name}</span>
                            <span className={styles.date}>{data?.createdAt}</span>
                        </div>
                    </div>
                </div>
                {data?.img&&(<div className={styles.imageContainer}>
                    <Image src={data.img} alt="" fill className={styles.image} />
                </div>)}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}
                    dangerouslySetInnerHTML={{ __html: data?.desc}}
                    >
                    </div>
                    <div className={styles.comment}>
                        <Comment postSlug={slug}/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default singlePage