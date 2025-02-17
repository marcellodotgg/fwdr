import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { AuthService } from "../../services/auth.service";
import { AsyncPipe, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-navbar",
  imports: [AsyncPipe, NgOptimizedImage],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent implements OnInit {
  protected readonly LOGIN_URL = `${environment.API_BASE_URL}/auth/google`;

  constructor(protected readonly auth: AuthService) {}

  ngOnInit(): void {
    this.auth.whoAmI().subscribe();
  }
}
