import { Trash } from "phosphor-react";
import styles from './Item.module.css'

interface ItemProps {
    checked: boolean;
    description: string;
    handleCheck: () => void;
    deleteItem: () => void;
}

export function Item({ checked, description, handleCheck, deleteItem }: ItemProps) {
    return <div className={styles.container}>
        <input type="checkbox" checked={checked} onClick={handleCheck} />
        <span className={checked ? styles.done : styles['not-done']}>{description}</span>
        <Trash size={22} className={styles.trash} onClick={deleteItem}/>
    </div>
}