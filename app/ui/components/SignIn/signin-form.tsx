import styles from "./form.module.css";


export default function SignInForm({ 
    btnText,
    emailLabel, 
    passwordLabel 
}: { 
    btnText: string,
    emailLabel: string, 
    passwordLabel: string 
}){
    return (
        <form className={styles.ModalForm}
            action="/deals"
        >
            <div className={styles.InputWrapper}>
                <label>
                    {emailLabel}
                    <input className={styles.FormInput}
                        placeholder="E-mail"
                        type="text"
                    />
                </label>
            </div>
            <div className={styles.InputWrapper}>
                <label>
                    {passwordLabel}
                    <input className={styles.FormInput}
                        placeholder="Your Jupter pass"
                        type="password"
                    />
                </label>
            </div>
            <div className={styles.ButtonWrapper}>
                <button 
                    type="submit"
                >
                    {btnText}
                </button>
            </div>
        </form>
    );
}
