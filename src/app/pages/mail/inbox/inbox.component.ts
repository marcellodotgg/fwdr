import { Component, OnInit, signal } from "@angular/core";
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { Inbox, InboxEmail, MailService } from "../mail.service";
import { EmailComponent } from "../components/email/email.component";
import { filter, map, switchMap, tap } from "rxjs";

@Component({
  selector: "app-inbox",
  imports: [RouterLink, RouterLinkActive, EmailComponent],
  templateUrl: "./inbox.component.html",
  styleUrl: "./inbox.component.scss",
})
export class InboxComponent implements OnInit {
  emails = signal<Inbox>([]);
  selected = signal<InboxEmail | null>(null);

  constructor(
    private readonly mail: MailService,
    private readonly activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.mail.inbox$
      .pipe(
        tap((emails) => this.emails.set(emails)),
        switchMap(() => {
          return this.activatedRoute.children.at(0)?.params ?? [];
        }),
        map((params) => params["id"]),
        filter(Boolean),
      )
      .subscribe((emailId: number | string) => {
        const email = this.emails().find(
          (email) => email.email_id === Number(emailId),
        );
        this.selected.set(email ?? null);
      });
  }
}
