import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormLabelTextComponent } from '../../molecules/form-label-text/form-label-text.component';

@Component({
  selector: 'app-organism-calcule-number',
  templateUrl: './organism-calcule-number.component.html',
  styleUrls: ['./organism-calcule-number.component.css']
})
export class OrganismCalculeNumberComponent implements OnInit {

  @Input() title!:string;
  @Input() titleButton!:string;

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() numberEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  calculePrimoDivisor() {
    this.add.emit();
  }

  number($event:any){
    this.numberEvent.emit($event);
  }
}
