import { useState, ChangeEvent } from 'react';
import styles from './Body.module.css'
import { Panel } from './Panel'
import plus from './assets/plus.svg'
export interface ItemType {
    id: number;
    checked: boolean;
    description: string;
}

export function Body() {
    const [items, setItems] = useState<Array<ItemType>>([])
    const [description, setDescription] = useState("")

    function handleCheckItem(id: number) {
        let itemsCopy = [...items]
        const index = itemsCopy.findIndex(e => e.id == id)
        itemsCopy[index].checked = !itemsCopy[index].checked
        setItems(itemsCopy)
    }

    function handleCreateItem() {
        let newItem: ItemType = {
            id: items.length + 1,
            checked: false,
            description: description
        }

        setDescription('')
        setItems([...items, newItem])
    }

    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
        setDescription(event.target.value)
    }

    return <div className={styles.container}>
        <div className={styles.search}>
            <input placeholder='Adicione uma nova tarefa' value={description} onChange={handleDescriptionChange} />
            <button onClick={handleCreateItem} disabled={description == ""}>
                Criar <img src={plus} />
            </button>
        </div>
        <Panel handleCheckItem={handleCheckItem} items={items} />
    </div>
}