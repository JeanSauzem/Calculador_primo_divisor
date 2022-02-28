import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { InputComponent } from '../../atoms/input/input.component'
import { ButtonComponent } from '../../atoms/button/button.component'
import { LabelComponent } from '../../atoms/label/label.component'

@Component({
  selector: 'app-form-label-text',
  templateUrl: './form-label-text.component.html',
  styleUrls: ['./form-label-text.component.css']
})
export class FormLabelTextComponent implements OnInit {
  
  @Input() title!:string
  @Input() titleButton!:string;
  @Input() number!:any;
  
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() numberEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  calculePrimoDivisor() {
    this.add.emit()
  }

  eventChange($event:any) {
    this.numberEvent.emit($event);
  }
}
