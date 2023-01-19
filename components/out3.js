import Link from 'next/link'
import styles from 'styles/layout3.module.css'

const Out3 = ({ URL, comment1, comment2, comment3 }) => {
    return (
        <div className={styles.box}>
            <Link href="/layout3">{URL}
            </Link>
            <p>(2023.01.18)</p>
            <p>{comment1}</p>
            <p>{comment2}</p>
            <Link href="#">続きを読む</Link>
        </div>
    )
}

export default Out3