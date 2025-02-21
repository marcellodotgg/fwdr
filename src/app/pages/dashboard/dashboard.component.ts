import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { AsyncPipe } from "@angular/common";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";

@Component({
  selector: "app-dashboard",
  imports: [AsyncPipe, ContactUsComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  constructor(protected readonly auth: AuthService) {}
}
