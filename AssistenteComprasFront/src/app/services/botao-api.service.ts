import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


export interface RetornoApi {
  retorno: string;
}

@Injectable({
  providedIn: 'root'
})
export class BotaoApiService {

  constructor(private http: HttpClient){}

api = 'http://localhost:8080/botaoApi';
httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/text',
      'responseType': 'text'
  }),
}

chamaApi() {
    return this.http.get(this.api,this.httpOptions)
    .pipe(
        map((response: RetornoApi) => {
         return response;
        })
    );
}
}
