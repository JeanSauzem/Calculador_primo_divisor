import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  number1:any;
  @Output() numberEvent: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eventChange() {
    this.numberEvent.emit(this.number1)
  }
}
