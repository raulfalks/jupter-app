import styles from "@/app/home.module.css";
import Logo from "@/app/ui/components/Logo/jupter-logo";
import SignInForm from "@/app/ui/components/SignIn/signin-form";


export default function Page() {
    return (
        <div className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.Modal}>
                    <div className={styles.ModalContent}>
                        <p className={styles.ModalHeading}>
                            Join our ecossystem, the path to venture capital's next chapter begins here.
                        </p>
                        <SignInForm 
                            btnText="Join"
                            emailLabel="Login"
                            passwordLabel="Password"
                        />
                        <Logo />
                    </div>
                </div>
            </div>
        </div>
    );
}