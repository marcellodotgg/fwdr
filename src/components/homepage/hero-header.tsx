import {Demo} from "~/components/homepage/demo";

export function HeroHeader() {
    return <header class="flex flex-col gap-4 text-center py-8">
        <h1 class="text-4xl font-extrabold">fwdr</h1>
        <p>The self-proclaimed, world's most simple e-mail forwarder for developers.</p>
        <h2 class="mt-8 text-2xl font-bold">Try it Yourself</h2>
        <Demo />
    </header>
}