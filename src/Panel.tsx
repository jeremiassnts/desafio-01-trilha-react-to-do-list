import { useState } from 'react'
import { Label } from './Label'
import styles from './Panel.module.css'
import list from './assets/list.svg'

interface Item {
    id: number;
    checked: boolean;
    description: string;
}

export function Panel() {
    const [items, setItems] = useState<Array<Item>>([])
    return <div className={styles.container}>
        <div className={styles.header}>
            <Label color='#4EA8DE' text='Tarefas criadas' value='0' />
            <Label color='#8284FA' text='Concluídas' value='0' />
        </div>
        {
            items.length == 0 &&
            <div className={styles.noItems}>
                <img src={list} />
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        }
    </div>
}