import { Component, input } from "@angular/core";
import { Variant } from "../../enums/variants.enum";

@Component({
  selector: "app-badge",
  styles: `
    :host {
      display: contents;
    }
  `,
  template: `
    @switch (variant()) {
      @default {
        <span
          class="inline text-sm font-bold rounded-full px-1.5 py-0.5 bg-primary-100"
        >
          <ng-content />
        </span>
      }
    }
  `,
})
export class BadgeComponent {
  variant = input<Variant>(Variant.Default);
}
