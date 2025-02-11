import {createSignal, Show} from "solid-js";
import "./demo.css";
import {BASE_URL} from "~/app";

export function Demo() {
    const [email, setEmail] = createSignal("");
    const [showSuccess, setShowSuccess] = createSignal(false);
    const [showFailure, setShowFailure] = createSignal(false);
    const [message, setMessage] = createSignal("😩 You've hit your limit, try again in 15 minutes.");
    const [isLoading, setIsLoading] = createSignal(false);

    async function sayHello(e: Event) {
        e.preventDefault();

        setIsLoading(true);

        try {
                const response = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: email(),
                    from: "bytebury@gmail.com",
                    subject: "Hello World from fwdr",
                    body: "You sent this from https://fwdr.dev"
                }),
                credentials: "include",
            });

            if (response.ok && response.status === 200) {
                setShowSuccess(true);
                setEmail("");

                setTimeout(() => {
                    setShowSuccess(false);
                }, 5_000);
            } else if (response.status === 429) {
                setMessage("😩 You've hit your limit, try again in 15 minutes.");
                setShowSuccess(false);
                setShowFailure(true);
                setEmail(email);
            } else {
                setMessage("😩 You've hit your limit, try again in 15 minutes.");
                setShowSuccess(false);
                setShowFailure(true);
                setEmail(email);
            }
        } catch (e) {
            if (!showSuccess()) {
                setShowFailure(true);
            }
           setShowSuccess(false);
        } finally {
            setIsLoading(false);
        }
    }

    return <form class="flex flex-col gap-4" onSubmit={sayHello}>
        <Show when={showSuccess()}>
           <div class="w-full bg-primary-200 py-4">👌 We sent you an e-mail! Check your inbox or spam folder!</div>
        </Show>
        <Show when={showFailure()}>
            <div class="w-full bg-primary-200 py-4">{message()}</div>
        </Show>
        <div class="flex flex-1 justify-center">
        <label class="sr-only" for="email">Email Address</label>
        <input required id="email" value={email()} type="email" placeholder="Enter Your E-mail Address" autocomplete="email" onInput={e => setEmail(e.currentTarget.value)} />
            <button type="submit" disabled={!email() || isLoading()}>
                <Show when={isLoading()}>
                    <svg class="size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </Show>
                <Show when={!isLoading()}>
                    Send <span class="hidden sm:inline">E-mail</span>
                </Show>
            </button>
        </div>
    </form>
}
