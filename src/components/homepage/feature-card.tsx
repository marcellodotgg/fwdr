import { Show } from "solid-js";
import {Badge} from "~/components/shared/badge";

export function FeatureCard(props: any) {
    return <div class="flex h-full flex-col gap-2 bg-primary-300 border transition-colors duration-300 border-primary-200 p-4 hover:border-primary-50 hover:cursor-default">
        <h1 class="inline-flex gap-1.5 font-extrabold">{props.name} <Show when={props.isPro}><Badge>Pro</Badge></Show><Badge type="warning">Coming soon</Badge></h1>
        <p>
            {props.children}
        </p>
    </div>
}