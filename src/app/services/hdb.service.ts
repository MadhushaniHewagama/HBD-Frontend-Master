import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import{BASE_URL,API_URL} from '../config/constants'
import { User } from '../modal/User';
import {BDay} from '../modal/BDay'

@Injectable({
  providedIn: 'root'
})
export class HdbService {

  constructor(private httpClient: HttpClient) { }
  public getTest():Observable<any>{
    const url =`${API_URL}/test`;
    return this.httpClient.get(url);
  }

  public addUser(user:User): Observable<any>{
    const url = `${API_URL}/users`;
    return this.httpClient.post(url, user);
  }
  public addBDay(bDay:BDay): Observable<any>{
    const url = `${API_URL}/bday`;
    return this.httpClient.post(url, bDay);
  }

}
