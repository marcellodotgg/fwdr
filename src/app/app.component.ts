import { Component } from "@angular/core";
import { HeroHeaderComponent } from "./pages/homepage/hero-header/hero-header.component";
import { FeatureCardComponent } from "./pages/homepage/feature-card/feature-card.component";

@Component({
  selector: "app-root",
  imports: [HeroHeaderComponent, FeatureCardComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
