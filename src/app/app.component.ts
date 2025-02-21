import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [ReactiveFormsModule, NavbarComponent, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
