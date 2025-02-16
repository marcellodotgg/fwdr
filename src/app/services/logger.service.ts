import { Injectable } from "@angular/core";
import { AnalyticsService } from "./analytics.service";

@Injectable({
  providedIn: "root",
})
export class Logger {
  constructor(private readonly analytics: AnalyticsService) {}

  log(...messages: any[]): any {
    console.dir(...messages);
  }

  error(...messages: any[]) {
    this.analytics.sendEvent("error", {
      message: messages.join(" "),
    });
  }
}
