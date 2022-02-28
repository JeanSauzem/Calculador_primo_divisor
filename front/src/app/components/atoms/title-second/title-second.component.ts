import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-second',
  templateUrl: './title-second.component.html',
  styleUrls: ['./title-second.component.css']
})
export class TitleSecondComponent implements OnInit {
  @Input() title!:string
  constructor() { }

  ngOnInit(): void {
  }

}
