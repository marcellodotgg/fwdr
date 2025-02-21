import { Component, signal } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Mailer } from "../../services/mailer.service";
import { filter, finalize } from "rxjs";
import { BannerComponent } from "../banner/banner.component";
import { Variant } from "../../enums/variants.enum";
import { AnalyticsService } from "../../services/analytics.service";
import { AuthService } from "../../services/auth.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: "app-contact-us",
  imports: [ReactiveFormsModule, BannerComponent, AsyncPipe],
  templateUrl: "./contact-us.component.html",
})
export class ContactUsComponent {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40),
    ]),
    body: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(400),
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email,
      Validators.maxLength(100),
    ]),
  });

  isLoading = signal(false);
  message = signal<{ content: string; variant: Variant } | undefined>(
    undefined,
  );

  constructor(
    private readonly mailer: Mailer,
    private readonly analytics: AnalyticsService,
    protected readonly auth: AuthService,
  ) {
    this.auth.currentUser$
      .pipe(filter(Boolean), takeUntilDestroyed())
      .subscribe((user) => {
        this.form.patchValue({
          name: `${user.given_name} ${user.family_name}`,
          email: `${user.email}`,
        });
      });
  }

  sendEmail(): void {
    this.isLoading.set(true);

    this.mailer
      .sendEmail({
        to: "bytebury@gmail.com",
        body: `${this.form.value.body}\nFrom: ${this.form.value.email} <${this.form.value.name}>`,
        subject: "[ATTN]: Contact Us from fwdr",
      })
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: () => {
          this.analytics.sendEvent("contact_us_send");
          this.form.reset();
          this.message.set({
            variant: Variant.Success,
            content:
              "We have successfully received your e-mail and will get back to you soon.",
          });
        },
        error: (err) => {
          let content =
            "There was an error sending us your contact info, try again later.";

          if (err.status === 429) {
            content =
              "You have already tried contacting us, please try again later.";
            this.analytics.sendEvent("contact_us_send_limited");
          } else {
            this.analytics.sendEvent("contact_us_send_error", {
              message: err.message,
              status: err.status,
            });
          }

          this.message.set({ content, variant: Variant.Failure });
        },
      });
  }

  protected readonly Variant = Variant;
}
