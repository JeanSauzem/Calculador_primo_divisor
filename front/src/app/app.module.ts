import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InputComponent } from './components/atoms/input/input.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TitlePrincipalComponent } from './components/atoms/title-principal/title-principal.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { FormLabelTextComponent } from './components/molecules/form-label-text/form-label-text.component';
import { OrganismCalculeNumberComponent } from './components/organisms/organism-calcule-number/organism-calcule-number.component';
import { PageCalculeNumberComponent } from './page/page-calcule-number/page-calcule-number.component';
import { CalculePrimoDivisorServiceService } from './services/calcule-primo-divisor-service.service';
import { ItemComponent } from './components/atoms/item/item.component';
import { ListComponent } from './components/molecules/list/list.component';
import { TitleSecondComponent } from './components/atoms/title-second/title-second.component';
import { OrganismListNumberComponent } from './components/organisms/organism-list-number/organism-list-number.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    TitlePrincipalComponent,
    LabelComponent,
    FormLabelTextComponent,
    OrganismCalculeNumberComponent,
    PageCalculeNumberComponent,
    ItemComponent,
    ListComponent,
    TitleSecondComponent,
    OrganismListNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculePrimoDivisorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
