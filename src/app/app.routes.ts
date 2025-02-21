import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { authGuard } from "./guards/auth.guard";
import { unauthGuard } from "./guards/unauth.guard";
import { HomepageComponent } from "./pages/homepage/homepage.component";

export const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    canActivate: [unauthGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: "**",
    redirectTo: "",
    component: HomepageComponent,
    canActivate: [unauthGuard],
  },
];
