import { Component, input } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { InboxEmail } from "../../mail.service";

@Component({
  selector: "app-email",
  imports: [NgOptimizedImage],
  templateUrl: "./email.component.html",
  styleUrl: "./email.component.scss",
})
export class EmailComponent {
  email = input<InboxEmail | null>(null);
}
