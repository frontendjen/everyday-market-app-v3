import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category';

@Component({
standalone: false,                                               
selector: 'app-category-menu',                                  
templateUrl: './category-menu.component.html',
styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();                                 

  onItemSelected(category: Category) {

  this.categorySelected.emit(category);                            
  }
}
