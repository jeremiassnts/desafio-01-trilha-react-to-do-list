import { Label } from './Label'
import styles from './Panel.module.css'
import list from './assets/list.svg'
import { Item } from './Item';
import { ItemType } from './Body';

interface PanelProps {
    items: Array<ItemType>;
    handleCheckItem: (id: number) => void
}

export function Panel({ items, handleCheckItem }: PanelProps) {
    return <div className={styles.container}>
        <div className={styles.header}>
            <Label color='#4EA8DE' text='Tarefas criadas' value={items.length.toString()} />
            <Label color='#8284FA' text='Concluídas' value={`${items.filter(e => e.checked).length} de ${items.length}`} />
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