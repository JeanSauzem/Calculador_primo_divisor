import { Component, OnInit } from '@angular/core';
import { CalculePrimoDivisorServiceService } from 'src/app/services/calcule-primo-divisor-service.service';

import { OrganismCalculeNumberComponent } from '../../components/organisms/organism-calcule-number/organism-calcule-number.component'
import { OrganismListNumberComponent } from '../../components/organisms/organism-list-number/organism-list-number.component'

@Component({
  selector: 'app-page-calcule-number',
  templateUrl: './page-calcule-number.component.html',
  styleUrls: ['./page-calcule-number.component.css']
})
export class PageCalculeNumberComponent implements OnInit {
  title :string = "Informe um número:"
  titleButton: string = "Calcular"
  titlePrimo: string = "Números Primos"
  titleDivisor: string = "Números Divisores"

  numberA: any;
  numbersPrimo: any = []
  numbersDivisor: any = []
  constructor(private CalculePrimoDivisorServiceService:CalculePrimoDivisorServiceService) { }

  ngOnInit(): void {
  }

  async calculePrimoDivisor() {
    this.numbersPrimo = [];
    this.numbersDivisor = [];
    this.CalculePrimoDivisorServiceService.calcule(this.numberA).subscribe((result: any) => {
      this.numbersDivisor.push(result.divisor);
      this.numbersPrimo.push(result.primo)
    });
  }

  number($event: any){
    this.numberA = $event;
  }
}
