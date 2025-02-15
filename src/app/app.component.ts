import { Component } from "@angular/core";
import { HeroHeaderComponent } from "./pages/homepage/hero-header/hero-header.component";
import { FeatureCardComponent } from "./pages/homepage/feature-card/feature-card.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [HeroHeaderComponent, FeatureCardComponent, NgOptimizedImage],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
