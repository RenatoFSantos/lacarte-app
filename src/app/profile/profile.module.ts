import { ProfileFormComponent } from './profile-form/profile-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    ProfileFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    ProfileRoutingModule,
    SharedModule,
  ]
})
export class ProfileModule { }
