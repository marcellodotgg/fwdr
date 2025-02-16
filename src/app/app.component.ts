import { Component } from "@angular/core";
import { HeroHeaderComponent } from "./pages/homepage/hero-header/hero-header.component";
import { FeatureCardComponent } from "./pages/homepage/feature-card/feature-card.component";
import { NgOptimizedImage } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { BannerComponent } from "./components/banner/banner.component";
import { Variant } from "./enums/variants.enum";

@Component({
  selector: "app-root",
  imports: [
    HeroHeaderComponent,
    FeatureCardComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    ContactUsComponent,
    BannerComponent,
  ],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  protected readonly Variant = Variant;
}
