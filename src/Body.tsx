import { useState, ChangeEvent, FormEvent } from 'react';
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

    function handleCreateItem(event: FormEvent) {
        event.preventDefault()
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

    function handleDeleteItem(id: number) {
        let newItems = items.filter(e => e.id != id)
        setItems(newItems)
    }

    return <div className={styles.container}>
        <form className={styles.search} onSubmit={handleCreateItem}>
            <input placeholder='Adicione uma nova tarefa' value={description} onChange={handleDescriptionChange} />
            <button type='submit' disabled={description == ""}>
                Criar <img src={plus} />
            </button>
        </form>
        <Panel checkItem={handleCheckItem} items={items} deleteItem={handleDeleteItem} />
    </div>
}