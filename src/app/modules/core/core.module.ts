import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RegisterPageComponent } from './register-page/register-page.component';

import { CountryValidatorDirective } from './register-page/validators/country-validator.directive';

@NgModule({
  declarations: [
  RegisterPageComponent
  ],

  imports: [CommonModule, FormsModule, CountryValidatorDirective],
  exports: [RegisterPageComponent]
  })

  export class CoreModule {}
  






