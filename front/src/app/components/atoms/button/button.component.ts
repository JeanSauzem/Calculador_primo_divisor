import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title!:string;
  @Output() add: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  generate() {
    this.add.emit()
  }
}
