"use client";

import styles from "./form.module.css";

import { authenticate } from "@/app/lib/actions";

import { 
    useFormState, 
    useFormStatus 
} from "react-dom";
import {
    ExclamationCircleIcon
} from '@heroicons/react/24/outline';


export default function SignInForm({ 
    emailLabel, 
    passwordLabel 
}: { 
    emailLabel: string, 
    passwordLabel: string 
}){
    const [errorMessage, dispatch] = useFormState(authenticate, undefined);


    return (
        <form action={dispatch} className={styles.ModalForm}>
            <div className={styles.InputWrapper}>
                <label htmlFor="email">
                    {emailLabel}
                    <input 
                        className={styles.FormInput}
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required
                        type="email"
                    />
                </label>
            </div>
            <div className={styles.InputWrapper}>
                <label htmlFor="password">
                    {passwordLabel}
                    <input 
                        className={styles.FormInput}
                        id="password"
                        minLength={6}
                        name="password"
                        placeholder="Your Jupter pass"
                        required
                        type="password"
                    />
                </label>
            </div>
            <LoginButton />
            <div className={styles.ErrorWrapper}>
                {errorMessage && (
                    <>
                        <ExclamationCircleIcon className={styles.ErrorIcon}/>
                        <p className={styles.ErrorMessage}>
                            {errorMessage}
                        </p>
                    </>
                )}
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();


    return (
        <div aria-disabled={pending} className={styles.ButtonWrapper}>
            <button type="submit">
                Join
            </button>
        </div>
    );
}
