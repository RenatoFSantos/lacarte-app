import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SharedModule } from 'src/shared/shared.module';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { StarRatingComponent } from 'src/shared/component/star-rating/star-rating.component';



@NgModule({
  declarations: [
    MenuListComponent,
    MenuCategoryComponent,
    StarRatingComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    SimpleMaskModule,
    SharedModule,
  ]
})
export class MenuModule { }
