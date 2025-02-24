import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-mail-layout",
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./mail.component.html",
  styleUrl: "./mail.component.scss",
})
export class MailLayoutComponent {}
