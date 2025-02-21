import { Component, input } from "@angular/core";
import { Variant } from "../../enums/variants.enum";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-banner",
  imports: [NgClass],
  template: `
    <div
      class="flex items-center gap-4 justify-center border p-3 rounded-lg {{
        variantMap[variant()].bg
      }}"
    >
      <div [ngClass]="variantMap[variant()].text">
        @switch (variant()) {
          @case (Variant.Success) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
          @case (Variant.Warning) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
          }
          @case (Variant.Failure) {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          }
          @default {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        }
      </div>
      <ng-content />
    </div>
  `,
})
export class BannerComponent {
  protected readonly Variant = Variant;
  protected readonly variantMap = {
    [Variant.Default]: {
      bg: "bg-emerald-600/15 border-emerald-400/15",
      text: "text-emerald-600",
    },
    [Variant.Success]: {
      bg: "bg-emerald-600/15 border-emerald-400/15",
      text: "text-emerald-600",
    },
    [Variant.Warning]: {
      bg: "bg-yellow-600/15 border-yellow-400/15",
      text: "text-yellow-600",
    },
    [Variant.Failure]: {
      bg: "bg-rose-600/15 border-rose-400/15",
      text: "text-rose-600",
    },
    [Variant.Info]: {
      bg: "bg-yellow-600/15 border-yellow-400/15",
      text: "text-yellow-600",
    },
  };

  variant = input(Variant.Default);
}
