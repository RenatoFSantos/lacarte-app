import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleMaskModule } from 'ngx-ion-simple-mask';

import { SharedModule } from 'src/shared/shared.module';
import { CashbackListComponent } from './cashback-list/cashback-list.component';
import { CashbackRoutingModule } from './cashback-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CashbackListComponent],
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    CashbackRoutingModule,
    SimpleMaskModule,
  ],
})
export class CashbackModule {}
