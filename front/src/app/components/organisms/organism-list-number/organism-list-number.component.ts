import { Component, Input, OnInit } from '@angular/core';

import { ListComponent } from '../../molecules/list/list.component'


@Component({
  selector: 'app-organism-list-number',
  templateUrl: './organism-list-number.component.html',
  styleUrls: ['./organism-list-number.component.css']
})
export class OrganismListNumberComponent implements OnInit {

  @Input() title!:string
  @Input() numbers:any;
  constructor() { }

  ngOnInit(): void {
  }

}
