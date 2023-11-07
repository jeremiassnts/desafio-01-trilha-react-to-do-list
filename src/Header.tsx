import styles from './Header.module.css'
import rocket from './assets/rocket.svg'

export function Header() {
    return <div className={styles.container}>
        <img src={rocket} />
        <div>
            <span>to</span>
            <span>do</span>
        </div>
    </div>
}