import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{BASE_URL,API_URL} from '../config/constants'


@Injectable({
  providedIn: 'root'
})
export class HdbService {

  constructor(private httpClient: HttpClient) { }
  public getTest():Observable<any>{
    const url =`${API_URL}/test`;
    return this.httpClient.get(url);
  }
}
