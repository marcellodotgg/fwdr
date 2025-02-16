import { Component, signal } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AnalyticsService } from "../../services/analytics.service";

@Component({
  selector: "app-demo",
  imports: [ReactiveFormsModule],
  templateUrl: "./demo.component.html",
  styleUrl: "./demo.component.scss",
})
export class DemoComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  isLoading = signal(false);
  message = signal("");

  constructor(
    private readonly analytics: AnalyticsService,
    private readonly http: HttpClient,
  ) {}

  sendEmail(): void {
    this.isLoading.set(true);
    this.http
      .post(
        "https://api.fwdr.dev",
        {
          to: this.form.value.email,
          subject: "Hello World, from fwdr",
          body: "This e-mail was sent from the demo at https://fwdr.dev",
        },
        { responseType: "text", withCredentials: true },
      )
      .subscribe({
        next: () => {
          this.analytics.sendEvent("demo_send_email");
          this.message.set(
            "👌 We sent you an e-mail! Check your inbox or spam folder!",
          );
          this.form.reset();
          this.isLoading.set(false);
        },
        error: (err) => {
          if (err.status === 429) {
            this.message.set(
              "😩 You've hit your limit, try again in 15 minutes.",
            );
            this.analytics.sendEvent("demo_send_email_hit_limit");
          } else {
            this.message.set(
              "😩 Something weird happened. It's not you it's us.",
            );
            this.analytics.sendEvent("demo_send_email_error", {
              error_message: err.message,
              status: err.status,
            });
          }
          this.isLoading.set(false);
        },
      });
  }
}
