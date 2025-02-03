import {Demo} from "~/components/homepage/demo";
import {Badge} from "~/components/shared/badge";

export function HeroHeader() {
    return <header class="container flex flex-col gap-4 text-center">
        <h1 class="text-4xl font-extrabold flex gap-2 items-center justify-center">fwdr <Badge>beta</Badge></h1>
        <p>The self-proclaimed, world's most simple e-mail forwarder for developers.</p>
        <div class="flex flex-col gap-4 bg-[#0B000B] border border-[#200120] py-8">
            <h2 class="text-2xl font-bold">Try it Yourself</h2>
            <Demo/>
        </div>
    </header>
}