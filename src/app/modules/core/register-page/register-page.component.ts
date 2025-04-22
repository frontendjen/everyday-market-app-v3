import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
standalone: false,                                                // standalone is set to false, do not remove
selector: 'app-register-page',
styleUrls: ['./register-page.component.css'],
templateUrl: './register-page.component.html',

})

export class RegisterPageComponent {
 
  provinces: string[] = [                                           // array of provinces
  'Saskatchewan',
  'Alberta',
  'British Columbia',
  'Manitoba',
  'Newfoundland and Labrador',
  'Ontario',
  'Quebec',
  'Prince Edward Island',
  'Nova Scotia',
  'New Brunswick',
  'Northwest Territories',
  'Nunavut',
  ];

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {                                         
  if (form.valid) {

      this.router.navigate(['/products']);                        // if form is correct, takes user to the product page

    }
  }
}





