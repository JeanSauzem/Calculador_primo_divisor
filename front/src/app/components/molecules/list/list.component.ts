import { Component, Input, OnInit } from '@angular/core';

import { ItemComponent } from '../../atoms/item/item.component'
import { TitleSecondComponent } from '../../atoms/title-second/title-second.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title!:string
  @Input() numbers!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
