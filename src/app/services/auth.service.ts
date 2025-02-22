import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import {
  BehaviorSubject,
  catchError,
  defer,
  filter,
  Observable,
  of,
  tap,
} from "rxjs";
import { Router } from "@angular/router";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(null);
  readonly currentUser$ = defer(() => this.currentUser.asObservable());

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  whoAmI(): Observable<User | null> {
    if (this.currentUser.value) {
      return of(this.currentUser.value);
    }
    return this.http
      .get<User>(`${environment.API_BASE_URL}/auth/whoami`, {
        withCredentials: true,
      })
      .pipe(
        catchError(() => of(null)),
        filter(Boolean),
        tap((user) => {
          this.currentUser.next(user);
          sessionStorage.setItem("currentUser", JSON.stringify(user));
        }),
      );
  }

  logout(): void {
    this.http
      .delete(`${environment.API_BASE_URL}/auth/logout`, {
        withCredentials: true,
      })
      .subscribe({
        next: () => {
          this.currentUser.next(null);
          this.router.navigate(["/"]);
        },
      });
  }
}
