import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/home/category/category.model';

@Component({
  selector: 'app-subelement',
  templateUrl: './subelement.component.html',
  styleUrls: ['./subelement.component.scss']
})
export class SubelementComponent implements OnInit{
  @Input() categoria?: Category

  constructor() {}

  ngOnInit(): void {
  }

}
