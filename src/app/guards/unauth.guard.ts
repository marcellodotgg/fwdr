import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { firstValueFrom } from "rxjs";

export const unauthGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const currentUser = await firstValueFrom(authService.whoAmI());

    if (currentUser) {
      router.navigate(["dashboard"]);
      return false;
    }
    return true;
  } catch (err) {
    return true;
  }
};
