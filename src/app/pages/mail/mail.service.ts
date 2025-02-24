import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MailService {
  constructor(private readonly http: HttpClient) {}

  get inbox$(): Observable<Inbox> {
    return this.http.get<Inbox>(`${environment.API_BASE_URL}/mail/inbox`, {
      withCredentials: true,
    });
  }
}

export type Inbox = InboxEmail[];
export type InboxEmail = {
  email_id: number | string;
  is_bcc: boolean;
  subject: string;
  body: string;
  from: EmailSender;
  created_at: Date;
  updated_at: Date;
};
export type EmailSender = {
  email: string;
  family_name: string;
  given_name: string;
  picture: string;
};
