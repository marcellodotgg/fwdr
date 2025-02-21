import {
  Component,
  effect,
  ElementRef,
  OnInit,
  signal,
  viewChild,
} from "@angular/core";
import { environment } from "../../../environments/environment";
import { AuthService } from "../../services/auth.service";
import { AsyncPipe, NgOptimizedImage } from "@angular/common";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  imports: [NgOptimizedImage, AsyncPipe, RouterLink, RouterLinkActive],
})
export class NavbarComponent implements OnInit {
  protected readonly LOGIN_URL = `${environment.API_BASE_URL}/auth/google`;

  isDrawerOpen = signal(false);
  drawer = viewChild<ElementRef>("drawer");

  constructor(
    protected readonly auth: AuthService,
    private router: Router,
  ) {
    effect(() => {
      if (this.isDrawerOpen()) {
        this.drawer()!.nativeElement.style.marginLeft = "0";
      } else {
        this.drawer()!.nativeElement.style.marginLeft = "-100%";
      }
    });
  }

  ngOnInit(): void {
    this.auth.whoAmI().subscribe();

    this.router.events.subscribe(() => {
      this.hideDrawer();
    });
  }

  logout(): void {
    this.auth.logout();
  }

  showDrawer(): void {
    this.isDrawerOpen.set(true);
  }

  hideDrawer(): void {
    this.isDrawerOpen.set(false);
  }
}
