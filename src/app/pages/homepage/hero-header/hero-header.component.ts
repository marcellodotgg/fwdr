import { Component } from "@angular/core";
import { BadgeComponent } from "../../../components/badge/badge.component";
import { DemoComponent } from "../../../components/demo/demo.component";

@Component({
  selector: "app-hero-header",
  imports: [BadgeComponent, DemoComponent],
  template: `
    <header class="flex flex-col gap-4 container text-center">
      <h1 class="text-4xl flex gap-2 items-center justify-center">
        fwdr
        <app-badge>beta</app-badge>
      </h1>
      <p>
        The self-proclaimed, world's fastest and most simple e-mail forwarder
        for everyone.
      </p>
      <div
        class="flex flex-col gap-4 bg-primary-300 border border-primary-200 py-8 px-2"
      >
        <h2 class="text-2xl">Try it Yourself</h2>
        <app-demo />
      </div>
    </header>
  `,
})
export class HeroHeaderComponent {}
