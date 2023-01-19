import styles from "styles/pc.module.css"

const Ps = () => {
    return (<>
        <div className={styles.pc_head}>
            <div className={styles.display_outer}>
                <div className={styles.display_inner}></div>
                <div className={styles.camera}></div>
            </div>
        </div>
        <div className={styles.pc_body}>
            <div className={styles.body_inner}>
                <div className={styles.hollow}></div>
            </div>
        </div>
    </>
    )
}

export default Ps