import styles from "../styles/layout2.module.css"

const Layout2 = () => {
    return (
        <div className={styles.box}>
            <h1 className={styles.h1}>Prep Times</h1>
            {/* <div className={styles.p}> */}
                <h2 className={styles.hmar}>Headline</h2>
                <h3 className={styles.hmar}>Article 1</h3>
                <p className={styles.pmar}>sentence comes here sentence comes here sentence comes here sentence comes here</p>
                <h3 className={styles.hmar}>Article 2</h3>
                <p className={styles.pmar}>sentence comes here sentence comes here sentence comes here sentence comes here</p>
            {/* </div> */}
        </div>
    )
}

export default Layout2