import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionserviceService {

  constructor(private http: HttpClient) { }

  public getRegions = () => this.http.get(`https://ipg-integrations-develop.azurewebsites.net/api/PaymentHelper/locations`).pipe(map( (result: any) => {
    return result;
  }))

}
