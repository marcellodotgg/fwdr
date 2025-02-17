import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { BehaviorSubject, catchError, defer, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(null);
  readonly currentUser$ = defer(() => this.currentUser.asObservable());

  constructor(private readonly http: HttpClient) {}

  whoAmI(): Observable<User | null> {
    return this.http
      .get<User>(`${environment.API_BASE_URL}/auth/whoami`, {
        withCredentials: true,
      })
      .pipe(
        catchError(() => of(null)),
        tap((user) => this.currentUser.next(user)),
      );
  }
}

type User = {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  verified: boolean;
  provider: string;
  provider_id: string;
  created_at: Date;
  updated_at: Date;
};
