import styles from './Body.module.css'
import plus from './assets/plus.svg'

export function Body() {
    return <div className={styles.container}>
        <div className={styles.search}>
            <input placeholder='Adicione uma nova tarefa' />
            <button>
                Criar <img src={plus} />
            </button>
        </div>
    </div>
}