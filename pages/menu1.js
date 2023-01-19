import styles from 'styles/menu1.module.css'

const Menu1 = () => {
    return (
        <div className={styles.full}>
            <div className={styles.head}>
                <h1>Cafe Prep</h1>
            </div>
            <nav className={styles.main}>
                <h2>Drink</h2>
                <ul>
                    <li>Coffee</li>
                    <li>Latte</li>
                    <li>Espresso</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu1