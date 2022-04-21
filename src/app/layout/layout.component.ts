import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  txt: string = '';

  fruits: string[] = ['Apple', '', 'Orange', 'Pear', '', 'Pineapple', 'Strawberry', 'Grape', ''];

  constructor() { }

  ngOnInit(): void {
  }

}
