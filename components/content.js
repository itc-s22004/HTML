import styles from 'styles/news.module.css'

const Content = ({ title, comment }) => {
    return (
        <div>
            <h3 className={styles.hmar}>{title}</h3>
            <p className={styles.pmar}>{comment}</p>
        </div>
    )
}

export default Content