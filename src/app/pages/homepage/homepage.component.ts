import { Component } from "@angular/core";
import { BannerComponent } from "../../components/banner/banner.component";
import { HeroHeaderComponent } from "./hero-header/hero-header.component";
import { FeatureCardComponent } from "./feature-card/feature-card.component";
import { NgOptimizedImage } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactUsComponent } from "../../components/contact-us/contact-us.component";
import { Variant } from "../../enums/variants.enum";

@Component({
  selector: "app-homepage",
  imports: [
    HeroHeaderComponent,
    FeatureCardComponent,
    NgOptimizedImage,
    ReactiveFormsModule,
    ContactUsComponent,
    BannerComponent,
  ],
  templateUrl: "./homepage.component.html",
})
export class HomepageComponent {
  protected readonly Variant = Variant;
}
