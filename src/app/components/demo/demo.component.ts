import { Component, signal } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

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

  constructor(private readonly http: HttpClient) {}

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
        { responseType: "text" },
      )
      .subscribe({
        next: () => {
          this.message.set(
            "👌 We sent you an e-mail! Check your inbox or spam folder!",
          );
          this.form.reset();

          setTimeout(() => {
            this.message.set("");
          }, 6_000);

          this.isLoading.set(false);
        },
        error: (err) => {
          if (err.status === 401) {
            this.message.set(
              "😩 You've hit your limit, try again in 15 minutes.",
            );
          } else {
            this.message.set(
              "😩 Something weird happened. It's not you it's us.",
            );
          }

          console.log(err);
          this.isLoading.set(false);
        },
      });
  }
}
