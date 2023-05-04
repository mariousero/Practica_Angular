import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() categoria?: Category;

  constructor() {}

  ngOnInit(): void {
  }
  

}
