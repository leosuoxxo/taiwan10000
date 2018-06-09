import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { BannerComponent } from './banner/banner.component';
import { IconComponent } from './icon/icon.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    MenuComponent,
    BannerComponent,
    IconComponent,
    NewsCardComponent,
    ButtonComponent,
    CardComponent,
    ProductComponent
  ],
  exports: [
    FooterComponent,
    MenuComponent,
    BannerComponent,
    IconComponent,
    NewsCardComponent,
    ButtonComponent,
    CardComponent,
    ProductComponent
  ]
})
export class UiModule {}
