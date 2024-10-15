import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class cidadesService {

  url = 'http://localhost:3000/cidades';

  constructor(private http: HttpClient) { }

  getcidades(): Observable<cidade[]>{
    return this.http.get<cidade[]>(this.url);
  }
}
