import { CanActivateFn, Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { firstValueFrom } from "rxjs";

export const adminGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const currentUser = await firstValueFrom(authService.whoAmI());

    if (!currentUser?.is_admin) {
      router.navigate([""]);
      return false;
    }
    return true;
  } catch (err) {
    router.navigate([""]);
    return false;
  }
};
