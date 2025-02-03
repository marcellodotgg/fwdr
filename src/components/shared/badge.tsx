import {JSX} from "solid-js";

export function Badge({ children }: { children: JSX.Element }) {
    return <div class="contents">
        <span class="text-sm bg-primary font-bold rounded-full px-1.5 py-0.5">{children}</span>
    </div>
}