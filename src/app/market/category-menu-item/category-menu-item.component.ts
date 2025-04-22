import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
standalone: false,                           
selector: 'app-category-menu-item',
templateUrl: './category-menu-item.component.html',
styleUrls: ['./category-menu-item.component.css']
})

export class CategoryMenuItemComponent {

  @Input() categoryName: string = '';
  
  @Output() itemSelected = new EventEmitter<string>();

  onClick() {[

  ]
  this.itemSelected.emit(this.categoryName);
  }
}

