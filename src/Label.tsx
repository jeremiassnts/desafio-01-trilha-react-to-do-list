import styles from './Label.module.css'

interface LabelProps {
    text: string;
    value: string;
    color: string;
}

export function Label({ text, value, color }: LabelProps) {
    return <div className={styles.container}>
        <span style={{ color }}>{text}</span>
        <span className={styles.value}>{value}</span>
    </div>
}