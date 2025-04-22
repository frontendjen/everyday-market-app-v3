import { Directive } from '@angular/core';

import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appCountryValidator]',
  providers: [
    {

    provide: NG_VALIDATORS,
    useExisting: CountryValidatorDirective,
    multi: true
    }
  ]
})

export class CountryValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
  const validCountry = 'Canada';
  return control.value === validCountry ? null : { countryInvalid: true };
  }
}




