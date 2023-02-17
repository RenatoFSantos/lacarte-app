import { MenuListComponent } from './menu-list/menu-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCategoryComponent } from './menu-category/menu-category.component';

const routes: Routes = [
  { path: '', component: MenuListComponent },
  { path: 'company/:id', component: MenuCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
