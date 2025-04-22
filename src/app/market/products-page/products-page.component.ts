import { Component } from '@angular/core';

import { Category } from '../category';

@Component({
standalone: false,                                             
selector: 'app-products-page',
templateUrl: './products-page.component.html',
styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  categories: Category[] = [
  { id: 1, name: 'Social Media' },
  { id: 2, name: 'Mobile' },
  { id: 3, name: 'Content' },
  { id: 4, name: 'Email' },
  { id: 5, name: 'SEO' }
  ];

  onCategorySelected(category: Category) {                              
  alert(`Selected category: ${category.name}`);
  }
}
