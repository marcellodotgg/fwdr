import {JSX, Show} from "solid-js";

export function Badge({ children, type }: { children: JSX.Element, type?: string }) {
    return <div class="contents">
        <Show when={!type}>
            <span class="text-sm bg-primary-100 font-bold rounded-full px-1.5 py-0.5">{children}</span>
        </Show>
        <Show when={type === 'warning'}>
            <span class="text-sm bg-pink-950 font-bold rounded-full px-1.5 py-0.5">{children}</span>
        </Show>
    </div>
}