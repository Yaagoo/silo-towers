import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tower } from './tower.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrl = 'https://my-json-server.typicode.com/Yaagoo/silo-towers/towers';
  
constructor(private _http: HttpClient) { }
  getTowers(){
    return this._http.get<Tower[]>(this.apiUrl);    
  }
}
