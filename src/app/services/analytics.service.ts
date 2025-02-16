import { Injectable } from "@angular/core";
import { WindowRef } from "./window-ref.service";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  private readonly gtag: Function;

  constructor(private readonly window: WindowRef) {
    // @ts-ignore
    this.gtag = this.window.nativeWindow?.gtag;
  }

  sendEvent(name: string, params: unknown = {}) {
    this.gtag("event", name, params);
  }
}
