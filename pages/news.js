import styles from "styles/news.module.css"
import Content from 'components/content'

const Layout2 = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.h1}>Prep Times</h1>
            <h2 className={styles.hmar}>HeadLine</h2>
            <Content
                title="Article1"
                comment="sentence comes here sentence comes here sentence comes here sentence comes here"
            />
            <Content
                title="Article2"
                comment="sentence comes here sentence comes here sentence comes here sentence comes here"
            />
        </div>
    )
}

export default Layout2