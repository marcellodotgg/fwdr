import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ControlPanelService {
  constructor(private readonly http: HttpClient) {}

  get users$(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_BASE_URL}/users`, {
      withCredentials: true,
    });
  }
}
