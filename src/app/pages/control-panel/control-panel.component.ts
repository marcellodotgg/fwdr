import { Component, OnInit, signal } from "@angular/core";
import { ControlPanelService } from "./control-panel.service";
import { DatePipe, NgOptimizedImage } from "@angular/common";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@angular/common/http";
import { BadgeComponent } from "../../components/badge/badge.component";
import { finalize } from "rxjs";

@Component({
  selector: "app-control-panel",
  imports: [NgOptimizedImage, BadgeComponent, DatePipe],
  templateUrl: "./control-panel.component.html",
  styleUrl: "./control-panel.component.scss",
})
export class ControlPanelComponent implements OnInit {
  readonly users = signal<User[]>([]);
  readonly isLoading = signal(true);

  constructor(
    protected readonly controlPanelService: ControlPanelService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.controlPanelService.users$
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (users) => {
          this.users.set(users);
        },
        error: (err) => {
          if (err.status === HttpStatusCode.Forbidden) {
            this.router.navigateByUrl("");
          }
          this.router.navigateByUrl("");
        },
      });
  }
}
