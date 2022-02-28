import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class CalculePrimoDivisorServiceService {
  url = environment.url;
  constructor(private http: HttpClient) { }

  calcule(number: any): any{
    let urlCalcule: string = this.url+ '?number='+number
    return this.http.get(urlCalcule);
  }

}
