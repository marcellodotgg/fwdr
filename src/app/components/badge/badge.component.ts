import { Component, input } from "@angular/core";
import { Variant } from "../../enums/variants.enum";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-badge",
  styles: `
    :host {
      display: contents;
    }
  `,
  template: `
    <span
      class="inline text-sm font-bold rounded-full px-1.5 py-0.5 "
      [ngClass]="{
        'bg-pink-950': variant() === Variant.Failure,
        'bg-primary-100': variant() === Variant.Default,
      }"
    >
      <ng-content />
    </span>
  `,
  imports: [CommonModule],
})
export class BadgeComponent {
  protected readonly Variant = Variant;
  variant = input<Variant>(Variant.Default);
}
