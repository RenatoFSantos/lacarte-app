import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { SharedModule } from 'src/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProfileFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}
