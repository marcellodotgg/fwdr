import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { authGuard } from "./guards/auth.guard";
import { unauthGuard } from "./guards/unauth.guard";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { adminGuard } from "./guards/admin.guard";
import { ControlPanelComponent } from "./pages/control-panel/control-panel.component";

export const routes: Routes = [
  {
    path: "",
    component: HomepageComponent,
    canActivate: [unauthGuard],
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: "control-panel",
    component: ControlPanelComponent,
    canActivate: [adminGuard],
  },
  {
    path: "**",
    redirectTo: "",
    component: HomepageComponent,
    canActivate: [unauthGuard],
  },
];
