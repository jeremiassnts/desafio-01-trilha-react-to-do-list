import { useState } from 'react'
import { Label } from './Label'
import styles from './Panel.module.css'
import list from './assets/list.svg'
import { Item } from './Item';

interface Item {
    id: number;
    checked: boolean;
    description: string;
}

export function Panel() {
    const [items, setItems] = useState<Array<Item>>([{
        id: 1,
        checked: false,
        description: 'teste'
    }])
    function handleCheckItem(id: number) {
        let itemsCopy = [...items]
        const index = itemsCopy.findIndex(e => e.id == id)
        itemsCopy[index].checked = !itemsCopy[index].checked
        setItems(itemsCopy)
    }
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
        {
            items.length > 0 &&
            <div className={styles.list}>
                {items.map((item) => <Item checked={item.checked} description={item.description} key={item.id} handleCheck={() => handleCheckItem(item.id)} />)}
            </div>
        }
    </div>
}