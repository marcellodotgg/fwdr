import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class Mailer {
  constructor(private readonly http: HttpClient) {}

  sendEmail(email: Email): Observable<string> {
    return this.http.post(environment.API_BASE_URL, email, {
      responseType: "text",
      withCredentials: true,
    });
  }
}

export type Email = {
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
};
