import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { RegisterPageComponent } from './modules/core/register-page/register-page.component';

import { ProductsPageComponent } from './market/products-page/products-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterPageComponent },
  { path: 'products', component: ProductsPageComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

