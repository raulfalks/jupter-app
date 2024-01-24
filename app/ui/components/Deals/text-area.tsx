import styles from './deals-component.module.css';


export default function TextArea({
    label
}: {
    label: string
}) {
    return (
        <div className={styles.InputWrapper}>
            <label>
                {label}
                <textarea className={styles.TextAreaWrapper}
                    placeholder="Write why you are not interested here..."
                ></textarea>
            </label>
        </div>
    );
}