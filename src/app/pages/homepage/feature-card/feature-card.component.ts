import { booleanAttribute, Component, input } from "@angular/core";
import { BadgeComponent } from "../../../components/badge/badge.component";
import { Variant } from "../../../enums/variants.enum";

@Component({
  selector: "app-feature-card",
  template: `
    <div
      class="flex flex-col gap-2 h-full rounded-lg bg-primary-300 border border-primary-200 hover:border-primary-50 transition-colors duration-300 p-4 cursor-default"
    >
      <h1 class="inline-flex gap-1.5 items-start">
        {{ name() }}
        @if (isPro()) {
          <app-badge [variant]="Variant.Failure"> Pro </app-badge>
        }
      </h1>
      <p><ng-content /></p>
    </div>
  `,
  imports: [BadgeComponent],
})
export class FeatureCardComponent {
  protected readonly Variant = Variant;

  name = input.required<string>();
  isPro = input(false, { transform: booleanAttribute });
}
