import axios from 'axios';

export default function Login() {

    async function signinWithGoogle(): Promise<void> {
        window.location.href = "http://localhost:8080/auth/google"
    }

    return <>
        <button onClick={signinWithGoogle}>Sign in With Google</button>
    </>
}