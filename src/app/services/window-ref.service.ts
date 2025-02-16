import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class WindowRef {
  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  get nativeWindow(): (Window & typeof globalThis) | null {
    return isPlatformBrowser(this.platformId) ? window : null;
  }
}
