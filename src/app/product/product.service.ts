import { Http, Response } from '@angular/http';
import { InjectableDecorator, Inject,InjectionToken, Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Product } from './product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


export const BASE_URL = new InjectionToken<string>('apiUrl');
export class ProductService {
  
  constructor(private http: Http, @Inject('apiUrl') private apiUrl) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl+"/products");
  }
}
