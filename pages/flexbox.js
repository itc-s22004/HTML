import styles from "styles/flexbox.module.css"
import Link from "next/link"

const Menu4 = () => {
    return (
        <ul className={styles.ul}>
            <li><Link href="#">TOP</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#">NEWS</Link></li>
            <li><Link href="#">LINK</Link></li>
        </ul>
    )
}

export default Menu4